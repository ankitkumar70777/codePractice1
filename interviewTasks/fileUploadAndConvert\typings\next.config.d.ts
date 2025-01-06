
declare interface nextConfigType {
	static basePath: string;

	static swcMinify: boolean;

	static reactStrictMode: any;

	static compiler: {
	static styledComponents: boolean;
	};

	static env: {
	static NEXT_PUBLIC_NW18ENV: any;
	};

	static images: {
	static domains: (string | any)[];

	static remotePatterns: ({	} | any)[];
	};

	webpack(config: any): any;

	rewrites(): Promise<null>;

	static eslint: {
	static ignoreDuringBuilds: boolean;
	};
}
