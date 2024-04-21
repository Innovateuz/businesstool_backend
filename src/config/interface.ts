type Application = {
    port: string | "";
    host: string | "";
    name: string | "";
};

type MongoDB = {
    url: string | "";
};

type AWSService = {
    name: string;
    region: string;
    accessKey: string;
    secretKey: string;
    endpoint: string;
    url: string;
};


export type Config = {
    application: Application;
    mongodb: MongoDB;
    awsService: AWSService;
}