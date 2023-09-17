import Link from "next/link";

const Card = ({ title, author, tags, articleImg, serve }) => {
  return (
    <Link href={`articles/${serve}`}>
      <div className="flex w-fit gap-10 mb-4 bg-[#e9e2e2] rounded-2xl px-5 py-4">
        <div className=" ">
          <h3 className=" font-bold text-[1.65rem] w-[30rem] font-['Nova_Mono']">
            {title}
          </h3>
          <ul className="flex gap-3 mt-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-slate-400 px-3 py-1 rounded-2xl text-md text-gray-800 hover:text-gray-950"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-40 rounded-2xl flex">
          <img className="rounded-2xl bg-cover" src={articleImg}></img>
        </div>
      </div>
    </Link>
  );
};

export default Card;
