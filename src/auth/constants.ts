import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
    secret: 'danapuniatoken1234#',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);