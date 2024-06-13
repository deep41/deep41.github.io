type SkillsType = {
  skills?: string[];
};

const Skills = (props: SkillsType) => {
  const { skills } = props;
  return (
    <>
      <div className="bg-gray-100 px-6 py-4">
        {/* <div className="font-bold text-2xl">Technical skills</div> */}
        <div className="flex flex-row flex-wrap gap-2">
          {skills &&
            skills.map((item) => (
              <div className="cursor-default bg-blue-950 p-2 font-mono text-sm text-white transition hover:scale-110">
                {item}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
