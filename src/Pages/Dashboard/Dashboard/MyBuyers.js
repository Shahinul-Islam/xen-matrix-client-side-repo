import React from "react";

const MyBuyers = () => {
  return (
    <div>
      <section
        class="h-screen bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      >
        <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div class="max-w-2xl text-center">
            <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
              Comming Soon
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBuyers;
