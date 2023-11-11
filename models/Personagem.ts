import Region from "./Region"
import Role from "./Role"

interface Personagem {
    id: number,
    name: string,
    manifest_body: string,
    manifest_title: string,
    region_id: number,
    region: Region,
    role_id: number,
    role: Role,
    title: string,
    speak: string,
    url_splash: string,
    url_select: string
}

export default Personagem