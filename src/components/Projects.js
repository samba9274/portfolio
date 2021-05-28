import ProjectYaml from "./ProjectYaml";

export default function Projects({ lightMode }) {
  return (
    <div>
      <span className={`yaml-key${lightMode ? " light" : ""}`}>Projects </span>
      <span className={`yaml-seperator${lightMode ? " light" : ""}`}>:</span>
      <ProjectYaml
        title="DSC-AISSMSCOE Website"
        link="https://dsc-aissmscoe.web.app"
        description="Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. This is website made for DSC chapter of AISSMS College of Engineering, Pune."
        lightMode={lightMode}
      />
      <ProjectYaml
        title="Grant for better future"
        github="https://github.com/wildchild746/Grant-for-better-future"
        link="https://grant-for-better-future.web.app/"
        youtube="https://youtu.be/YxOG3DYbfzM"
        description="Over the years alot of books, clothes and toys that could be reused have been thrown in the trash. And on the others side alot of people below the poverty line have been deprived of the Joy of these items. So we decided to come up with a solution that could bridge the gap between the two. Our website connects donors and institutes that help the needy people and bridge the gap between haves and haves not. This app is an attempt to help poor parts of society and improve their live. We mainly focus on educating poor people by providing free books and improving their lives by providing them clothes. We also took into account small child in orphanages to provide them with toys.  Donating helps to reduce dumping of used stuff in dumpyards and benefits the poor."
        lightMode={lightMode}
      />
    </div>
  );
}
