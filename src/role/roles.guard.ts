import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./role.enum";
import { ROLES_KEY } from "./roles.decorator";
import { RoleRepository } from "./repository/role.repository";
import { JWTTokenDTO } from "src/_common/jwt-token/jwt-token.dto";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        // private reflector: Reflector,
        private roleRepository: RoleRepository,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { user } = context.switchToHttp().getRequest();
        console.log("inin:", user);
        // console.log("onon:", context.switchToHttp().getRequest());


        const requiredRoles = await this.roleRepository.getRoles({});
        const requiredRolesLength = requiredRoles.length;

        // for (let index = 0; index < requiredRolesLength; index++) {
        //     const role = requiredRoles[index];

        //     if (user.roleId != role.id) continue;

        //     return true;
        // }
        console.log("masok sini 2");
        return false;

        // console.log(requiredRoles);

        // return true;
        // const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        //     context.getHandler(),
        //     context.getClass(),
        // ]);
        // console.log("dada");
        // console.log(requiredRoles);

        // if (!requiredRoles) return true;

        // const { user } = context.switchToHttp().getRequest();
        // console.log(user.roleId);

        // return requiredRoles.some((role) => user.roles?.includes(role));
    }
}