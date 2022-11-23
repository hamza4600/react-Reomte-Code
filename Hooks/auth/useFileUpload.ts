import { Storage } from "aws-amplify";
import { useCallback, useState } from "react";
import { generate as generateShortUUID } from "short-uuid";
import {
    ApiCustomHookStateType,
    apiInitialState,
    FileUploadHookReturnType,
    getErrorResponse,
    getSuccessResponse,
} from "hooks/utils";
import { useSentry } from "hooks/sentry";
import awsConfig from "@remotebase/amplify-constants/aws-exports";

type FileProps = {
    name: string;
    lastModified: number;
    webkitRelativePath: string;
};

export const useFileUpload = (): FileUploadHookReturnType<
    string,
    string | null | undefined,
    File
> => {
    const [res, setRes] = useState<ApiCustomHookStateType<string>>(apiInitialState);
    const { sendError } = useSentry();

    const uploadFile = async (file: File, fileName: string, bucket: string): Promise<void> => {
        setRes({ ...apiInitialState, isLoading: true });
        try {
            const response = await Storage.put(fileName, file, {
                contentType: file?.type,
                bucket,
            });
            if (!response?.key) throw new Error("Error uploading file");
            const uploadedFile = await Storage.get(response.key, { bucket });
            setRes(getSuccessResponse(uploadedFile.split("?")[0]));
        } catch (error) {
            const fileProps: FileProps = {
                name: file.name,
                lastModified: file.lastModified,
                webkitRelativePath: file.webkitRelativePath,
            };
            sendError(error, { fileProps });
            setRes(getErrorResponse(error?.message));
        }
    };

    const uploadResume = useCallback(async (file: File): Promise<void> => {
        const bucketName = awsConfig.aws_user_files_s3_bucket;
        const uploadFileName = `resumes/${generateShortUUID()}-${file?.name}`;
        return uploadFile(file, uploadFileName, bucketName);
    }, []);

    const uploadImage = useCallback(async (file: File, fileName?: string | null): Promise<void> => {
        const bucketName = awsConfig.aws_user_files_s3_bucket.replace("resumes", "images");
        const uploadFileName = fileName || `dp-${generateShortUUID()}.png`;
        return uploadFile(file, uploadFileName, bucketName);
    }, []);

    return { res, uploadResume, uploadImage };
};

export default useFileUpload;
