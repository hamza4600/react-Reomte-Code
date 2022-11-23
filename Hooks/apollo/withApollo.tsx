/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ApolloProvider } from "@apollo/client";
import { Fragment, FC, PropsWithChildren } from "react";
import AwsConfig from "./awsConfig";
import useAuthSwapListener from "./useApollo";

function withApolloProvider<T>(PassedComponent: FC<T>) {
    return ({ children, ...props }: PropsWithChildren<T>): JSX.Element => {
        const { client, isApolloInitialized } = useAuthSwapListener(AwsConfig);

        if (!isApolloInitialized) return <Fragment />;
        if (!client) return <PassedComponent {...(props as T)}>{children}</PassedComponent>;

        return (
            <ApolloProvider client={client}>
                <PassedComponent {...(props as T)}>{children}</PassedComponent>
            </ApolloProvider>
        );
    };
}

export default withApolloProvider;
