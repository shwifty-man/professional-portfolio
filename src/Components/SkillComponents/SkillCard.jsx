import { SkillInfo } from "./SkillInfo";

export function SkillCard({title, list = []}) {
    console.log("List: ", list)

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log("Element: ", element)
    }


    const skillList = list.map(skill => <SkillInfo key={skill} skill={skill} />);


    return (
        <div className="Skills-card">
            <h2>{title}</h2>
            <div className="skills-grid">
                {skillList}
            </div>
        </div>
    )
}