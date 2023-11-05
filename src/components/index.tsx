import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { ContactFormField } from "./ContactFormField";
import { Editor } from "./Editor";
import { EditorGroups } from "./EditorGroups";
import { EditorTab } from "./EditorTab";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { JsonPair } from "./JsonPair";
import { Nav } from "./Nav";
import { NavLink } from "./NavLink";
import { ProjectYaml } from "./ProjectYaml";
import { Projects } from "./Projects";
import { SkillCss } from "./SkillCss";
import { Skills } from "./Skills";

export const Components = {
  Layout: {
    Editor,
    EditorGroups,
    EditorTab,
    Footer,
    Header,
    Nav,
    NavLink,
  },
  Pages: {
    Home: { Main: Home },
    AboutMe: { Main: AboutMe, JsonPair },
    Skills: { Main: Skills, SkillCss },
    Projects: { Main: Projects, ProjectYaml },
    Contact: { Main: Contact, ContactFormField },
  },
};
