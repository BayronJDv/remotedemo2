
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Content';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Content' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Content') :any;