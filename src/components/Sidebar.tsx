export default function Sidebar() {
  return (
    <main className="border-r-2 pr-2 w-64 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-auto shrink-0">
      <div className="w-[230px] ml-[10px] mt-[64px] text-right flex flex-col items-end gap-3 ">
        <p>
          Our centralized production infrastructure is based at Hupri Road,
          adjacent to Kolhapur Airport in Maharashtra, India. This
          infrastructure is fully equipped with the unit wise division of
          execution managed by skilled and trained craftsmen. We make use of all
          the latest machinery and processes for the production of our furniture
          products. The centralization of infrastructure, process, manpower and
          resources helps us in standardization and to maintain the grade of the
          finished products at par with international standards.
        </p>
        <div className="">
          <img src="./line.png" alt="./Group(1).png" />
        </div>
      </div>
    </main>
  );
}
