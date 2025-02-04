import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer  } from "./styles";
const SideBar = () => (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Titulo fontSize={20}> Erick Werkhausen </Titulo>
    <Paragrafo tipo="secundario">ErickWerkhausen</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
