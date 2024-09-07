import {postman} from "../../api/postman.ts";

class GroupService {
    private baseUrl = "";
    private userGroupsTag = "";
    private usersNotInGroupTag = "";
    private addUserInGroupTag = "";

    async getUserGroups(token: string) {
        return postman.get(this.baseUrl, this.userGroupsTag, {}, {}, token)
    }

    async getUsersNotInGroup(idGroup: number) {
        return postman.get(this.baseUrl, this.usersNotInGroupTag, )
    }
}