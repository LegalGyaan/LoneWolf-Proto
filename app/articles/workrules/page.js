// Purpose: WorkRules page component
const page = () => {
  return (
    <div className="px-96 py-10 mt-14">
      <div className="flex justify-center h-[400px]">
        <img
          src="https://3.imimg.com/data3/BX/WD/MY-12856501/construction-labour-services-500x500.jpg"
          alt="Work Rules"
          className="mt-5 rounded-sm shadow-xl object-cover"
          width={750}
        />
      </div>
      <h2 className=" mt-14 text-5xl font-semibold">
        All About Work Rules in India: Important Laws Made Simple
      </h2>

      <p className="mt-8 text-xl text-slate-700 italic">
        Work rules in India are like a playbook for bosses and workers. They
        help everyone get along and make sure that workers are treated fairly.
        In this article, we'll break down the important Indian work rules and
        make them easy to understand with simple bullet points.
      </p>

      <h4 className="mt-7 text-3xl ">
        Work Fight Rules (Industrial Disputes Act, 1947)
      </h4>
      <p className="mt-3 text-xl">
        These rules are like referees in a game to settle fights at work Here's
        what you need to know:
      </p>
      <ul className="mt-4">
        <li className="text-xl">
          <span className="font-semibold italic">Work Fights:</span> These rules
          cover any arguments between bosses and workers or even between workers
          themselves about their work conditions.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Settling Fights:</span> These
          rules have different ways to fix fights, like talking it out, getting
          help from someone neutral, or having someone decide what's fair.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Losing Your Job:</span> These
          rules also say how bosses can and can't let workers go when they don't
          need them anymore.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">
        Group Power Rules (Trade Unions Act, 1926)
      </h4>
      <p className="mt-3 text-xl">
        These rules are about workers teaming up to protect their rights. Here's
        the deal:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic"> Team Up:</span> Workers can
          join together in something called a "union" to make sure they're
          treated fairly.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Get Recognized:</span> Unions
          need to register to be official and have special rights.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Special Rights:</span>{" "}
          Registered unions get some extra perks, like not being sued easily.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">Work Hours Rules (Factories Act, 1948)</h4>
      <p className="mt-3 text-xl">
        These rules are about how long workers can work and when they should
        take breaks. Here's what's important:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">Work Hours:</span> These rules
          say how long workers can work each day and each week.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Breaks:</span> These rules also
          say when workers should take breaks during the day.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Extra Hours:</span> If workers
          have to work more than their regular hours, they should get extra pay.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">
        Fair Pay Rules (Minimum Wages Act, 1948)
      </h4>
      <p className="mt-3 text-xl">
        These rules make sure workers get paid enough to live on. Check this
        out:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">How Much to Pay:</span> The
          government decides the least amount of money bosses should pay workers
          for different jobs and places.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Getting Paid:</span> Bosses
          have to pay workers on time, whether it's every day, week, or month.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Extra Hours:</span> If workers
          have to work more than their regular hours, they should get extra pay.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">Safe Work Rules (Factories Act, 1948)</h4>
      <p className="mt-3 text-xl">
        These rules keep workers safe at their jobs. Here's what's important:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">Work Safe:</span> These rules
          make sure factories have safe conditions and that workers don't get
          hurt.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Hours and Rest:</span> They
          also say how long workers can work and when they should take breaks.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">No Dangerous Stuff:</span>{" "}
          These rules prevent dangerous things from hurting workers in
          factories.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">
        Extra Bonus Rules (Payment of Bonus Act, 1965)
      </h4>
      <p className="mt-3 text-xl">
        These rules are about bosses giving extra money to workers. Here's the
        deal:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">Extra Money:</span> If the
          company makes extra money, they might share it with the workers as a
          bonus.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Who Gets It:</span> Not
          everyone gets a bonus; you need to work for a certain time to be
          eligible.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Some Don't Apply:</span> Some
          companies don't have to follow these rules.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">
        Savings and Insurance Rules (Employees' Provident Fund and Miscellaneous
        Provisions Act, 1952)
      </h4>
      <p className="mt-3 text-xl">
        These rules help workers save money for later and have insurance. Here's
        the scoop:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">Savings:</span> Both workers
          and bosses save money each month in a special fund for workers' future
          needs.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">When to Use It:</span> Workers
          can use this money for important things like retirement or when
          they're sick.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Help for Families:</span> If a
          worker passes away, their family can get some money from this fund.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">
        Work Rules Book (Industrial Employment (Standing Orders) Act, 1946)
      </h4>
      <p className="mt-3 text-xl">
        This rule book tells everyone at work what's allowed and what's not.
        Check this out:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">Work Rules:</span> Employers
          have to write down all the rules for workers, like how to behave and
          what happens if they break the rules.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Making It Official:</span>{" "}
          These rules need to be approved by certain people to make sure they're
          fair.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">
        Goodbye Work Gift (Payment of Gratuity Act, 1972)
      </h4>
      <p className="mt-3 text-xl">
        This rule is like a thank-you gift when workers leave their job. Here's
        what it means:
      </p>
      <ul className="mt-4">
        <li>
          <span className="font-semibold italic">When You Get It:</span> If you
          work for a while and then leave, your boss should give you some extra
          money as a thank-you gift.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">How Much:</span> The gift
          depends on how long you worked and how much you were paid.
        </li>
        <li className="mt-1 text-xl">
          <span className="font-semibold italic">Getting It Quickly:</span> Your
          boss should give you the gift within a month after you leave.
        </li>
      </ul>

      <h4 className="mt-7 text-3xl ">Conclusion</h4>
      <p className="mt-3 text-xl italic">
        Work rules in India are like a set of friendly guidelines to make sure
        everyone is treated fairly at work. These rules help bosses and workers
        get along and ensure that work is a fair and safe place for everyone.
        Understanding these rules is important for everyone at work to make sure
        things run smoothly and fairly in India.
      </p>
    </div>
  );
};

export default page;
