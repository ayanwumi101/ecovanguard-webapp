import PatronSrc from "../../assets/executives/engr.jpg";
import PresidentSrc from "../../assets/executives/ao.jpg";
import SecretarySrc from "../../assets/executives/testimony.jpg";
import ProSrc from "../../assets/executives/wo.jpg";
import Pro2Src from "../../assets/executives/nr.jpg";
import ActSrc from "../../assets/executives/anu_o.jpg";
import EditorSrc from "../../assets/executives/to.jpg";
import DeputyEditorSrc from "../../assets/executives/al.jpg";
import TreasurerSrc from "../../assets/executives/oa.jpg";
import AcadDirSrc from "../../assets/executives/mubarak.jpg";
const EXECUTIVES = [
  {
    id: 0,
    src: PatronSrc,
    name: `Dr W.O Ajagbe`,
    title: `Lecturer`,
    position: `Patron`,
    about: ``,
  },
  {
    id: 1,
    src: PresidentSrc,
    name: `Abdusalam Oladapo`,
    title: `Civil Engineering Student`,
    position: `President`,
    about: `A passionate student of Civil Engineering with core interest in environmental sustainability, structural analysis, structural design and materials for construction. I have a flair for research, usage of engineering software and effective team building. I am knowledge-driven and goal-oriented with captivating communication, leadership and interpersonal skills and s history of strong contribution in both paid and volunteer positions.`,
  },
  {
    id: 2,
    src: SecretarySrc,
    name: `Testimony Akpunwoke`,
    title: `Civil Engineering Student`,
    position: `Secretary`,
    about: `A young philanthropist who is extremely intentional
about his environment and the world at large. I am a resilient man with major concerns in environmental development, leadership, creativity,  innovation and soft skills such as critical thinking, interpersonal relationships, teamwork, effective communication strategic planning and a lot to mention.
    `,
  },
  {
    id: 3,
    src: ProSrc,
    name: `Waleeyah Olalekan`,
    title: `Law Student`,
    position: `P.R.O. 1`,
    about: `
A young resilient lady who is perpetually craving to pursue beneficial knowledge purely for personal growth and community development. I am a personal development tracker with major concerns in creativity, moderation and soft skills such as teamwork, effective communication, interpersonal relationships and a host of others.
    `,
  },
  {
    id: 4,
    src: Pro2Src,
    name: `Nimotallahi Raji`,
    title: `Food Technology Student`,
    position: `P.R.O. 2`,
    about: `Nimotallahi is an award-winning public speaker on technology, innovation and international engagements. She deploys environment friendly solutions and uses her voice to influence others.

She is currently studying for a BSc degree in Food Technology as well as writing for a blog. Enjoys baking and is committed to the personal development of young people.`,
  },
  {
    id: 5,
    src: ActSrc,
    name: `Aanuoluwapo Odebode`,
    title: `Civil Engineering student`,
    position: `Activities Coordinator`,
    about: `
I am currently working on switching career into UI/UX design ,so that I will be able to design beautiful usable products to help solve various human problems
I am diligently gathering all knowledge to help me become a proficient designer and to be able to do exploit in the labor market
When I am not designing ,I am volunteering .
    `,
  },
  {
    id: 6,
    src: EditorSrc,
    name: `Toheeb Olayiwola`,
    title: `Animal Science student`,
    position: `Editor`,
    about: `His love for knowledge and action beyond Animal science has led to his involvement in different organisations in and beyond the University.
He is the Editor-in-Chief of Adh-Dhikr Press between 2018 to 2019, News Editor UCJUI in 2019 and the Current Lead Editor for EcoVanguard UI.

Olayiwola Toheeb is interested in personal development with major concerns in non-comformity, moderation and soft skills such as teamwork, effective communication, interpersonal relationships and a host of others.
Aside academics, he is a shoemaker and an entrepreneur with intensive training from The FATE School.
    `,
  },
  {
    id: 7,
    src: DeputyEditorSrc,
    name: `Aisha Lamidi`,
    title: `Human Nutrition and Dietetics student`,
    position: `Deputy Editor`,
    about: `
Aisha is an extraordinary lady who goes all out for what she believes in. She is a great listener and invests in positivity.
Aisha has special interests in journalism, writing and personal development.
    `,
  },
  {
    id: 8,
    src: TreasurerSrc,
    name: `Odunola Alade`,
    title: `Civil Engineering Student`,
    position: `Treasurer`,
    about: `An undergraduate with outstanding interpersonal, analytical and critical thinking skills. Possesses strong background in entrepreneurship, performance improvements, project management, safety and quality control, nature lover and tutoring. Demonstrated history of positively impacting projects through excellent communication skills, fast learning abilities and a commitment to providing high-quality service to every project. Adept at managing concurrent objectives to promote efficiency and influence positive outcomes. Poised to build valuable experience and ready to contribute to team success and continued organizational growth.`,
  },
  {
    id: 9,
    src: AcadDirSrc,
    name: `Mubarak Olopade`,
    title: `Civil Engineering Student`,
    position: `Academics Director`,
    about: `A proactive sanitary enthusiast whose sole interest is clean and healthy environment. I’ve organized and taken part in different environmental cleaning exercises on campus. With excellent communication and organizational skills, I'm excited about the prospect of sharing my knowledge on healthy and clean environment with others. I am able to identify potential problems and resolve them prior to them occurring.`,
  },
];
function getExecutiveById(id) {
  return EXECUTIVES.find((img) => img.id === id);
}
export { EXECUTIVES, getExecutiveById };
