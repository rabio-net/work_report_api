export default class AuthService {
    login(username: string, password: string): Promise<{
        status: number;
        user?: never;
        token?: never;
    } | {
        status: number;
        user: {
            id: any;
            name: any;
        };
        token: string;
    }>;
    logout(): Promise<void>;
}
//# sourceMappingURL=authService%20copy.d.ts.map