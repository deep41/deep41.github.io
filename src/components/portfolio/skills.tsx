type SkillsType = {
  skills?: string[];
};

const Skills = (props: SkillsType) => {
  const { skills } = props;
  return (
    <>
      <div className="px-6 py-4 bg-gray-100">
        {/* <div className="font-bold text-2xl">Technical skills</div> */}
        <div className="flex flex-row flex-wrap gap-2">
          {skills &&
            skills.map((item) => (
              <div className="p-2 bg-blue-950 text-white hover:scale-110 transition font-mono text-sm cursor-default">
                {item}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
