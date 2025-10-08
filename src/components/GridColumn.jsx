import React from "react";

const GridColumn = ({teamMembers}) => {
  return (
    <>
      <section>
        {/* 2 equal part */}
        <div class="container mx-auto p-4">
          <div class="flex flex-col sm:flex-col md:flex-row gap-4">
            <div class="flex-1 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This is the first column.</p>
            </div>
            <div class="flex-1 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This is the first column.</p>
            </div>
          </div>
        </div>
        {/* 1 part */}

        <div class="container mx-auto p-4">
          <div class="flex flex-col sm:flex-col md:flex-row gap-4">
            <div class="flex-1 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This is the first column.</p>
            </div>
          </div>
        </div>

        {/* 4 eqpal part */}
        <div class="container mx-auto p-4">
          <div class="flex flex-col sm:flex-col md:flex-row gap-4">
            <div class="flex-1 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This is the first column.</p>
            </div>
            <div class="flex-1 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This is the first column.</p>
            </div>
            <div class="flex-1 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This is the first column.</p>
            </div>

            <div class="flex-1 bg-green-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 2</h2>
              <p>This is the second column.</p>
            </div>
          </div>
        </div>
        {/* 1big and 2 small part */}
        <div class="container mx-auto p-4">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/5 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This column takes 60% width on medium and larger screens.</p>
            </div>

            <div class="md:w-2/5 bg-green-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 2</h2>
              <p>This column takes 40% width on medium and larger screens.</p>
            </div>
          </div>
        </div>
        {/* 1 small and 2 big part */}
        <div class="container mx-auto p-4">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-2/5 bg-blue-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 1</h2>
              <p>This column takes 60% width on medium and larger screens.</p>
            </div>

            <div class="md:w-3/5 bg-green-500 text-white p-6">
              <h2 class="text-xl font-bold mb-2">Column 2</h2>
              <p>This column takes 40% width on medium and larger screens.</p>
            </div>
          </div>
        </div>
        {/* 1 big and 2nd small */}
        <div class="container w-full bg-gray-100 py-10">
          <div class="mx-auto w-full max-w-[1020px] px-4">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="w-full md:w-3/5 bg-blue-500 text-white p-6">
                <h2 class="text-xl font-bold mb-2">Column 1</h2>
                <p>60% width on desktop, full width on mobile.</p>
              </div>

              <div class="w-full md:w-2/5 bg-green-500 text-white p-6">
                <h2 class="text-xl font-bold mb-2">Column 2</h2>
                <p>40% width on desktop, full width on mobile.</p>
              </div>
            </div>
          </div>
        </div>
        {/* full width 1024px  */}
        <section class="w-full bg-gray-100 py-10">
          <div class="mx-auto w-full max-w-[1020px] px-4">
            <div class="bg-blue-500 text-white p-6">
              <h2 class="text-2xl font-bold mb-4">Single Column</h2>
              <p>
                This is a full-width responsive column, centered with a max
                width of 1020px.
              </p>
            </div>
          </div>
        </section>
{/* 9 full with container */}
         <section class="w-full bg-gray-100 py-10">
          <div class="container mx-auto w-full px-15">
            <div class="bg-blue-500 text-white p-6">
              <h2 class="text-2xl font-bold mb-4">Single Column</h2>
              <p>
                This is a full-width responsive column, centered with a max
                width of 1020px.
              </p>
            </div>
          </div>
        </section>
        {/* 8 */}
      </section>
       <div className="w-full max-w-7xl mx-auto px-4 py-12">
  {/* Section Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 uppercase text-[#193568]">
    Our Team
  </h2>

  {/* Team Grid */}
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center group"
      >
        {/* Circle Image Box */}
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-gray-200 shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#193568] bg-white">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Info */}
        <div className="mt-4 bg-[#193568] px-5 py-2 rounded-md transition-all duration-300 group-hover:bg-indigo-700">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {member.name}
          </h3>
          <p className="text-white text-sm sm:text-base">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default GridColumn;


