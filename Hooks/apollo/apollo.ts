import { InMemoryCache } from "@apollo/client";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";

const LOCAL_STORAGE_KEYS = {
    GRAPHQL_SCHEMA_VERSION: "graphqlSchemaVersion",
};

const cache = new InMemoryCache();

// This is a MD5 hash of schema.graphql
const SCHEMA_VERSION = process.env.REACT_APP_GRAPHQL_SCHEMA_VERSION;

// eslint-disable-next-line import/prefer-default-export
export const setupApolloCache = async (): Promise<InMemoryCache> => {
    const persistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        maxSize: 524288, // 0.5 MB
    });

    const currentSchemaVersion = localStorage.getItem(LOCAL_STORAGE_KEYS.GRAPHQL_SCHEMA_VERSION);

    if (currentSchemaVersion === SCHEMA_VERSION) {
        // If the current version matches the latest version,
        // we're good to go and can restore the cache.
        await persistor.restore();
    } else {
        // Otherwise, we'll want to purge the outdated persisted cache
        await persistor.purge();

        if (SCHEMA_VERSION) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.GRAPHQL_SCHEMA_VERSION, SCHEMA_VERSION);
        }
    }

    return cache;
};
