import React from "react";

const GridColumn = () => {
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
    </>
  );
};

export default GridColumn;
