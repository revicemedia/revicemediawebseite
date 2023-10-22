import React from "react";

function ImageGrid() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Fotografie/6.jpg"
              class="h-auto max-w-full rounded-lg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/Fotografie/9.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
