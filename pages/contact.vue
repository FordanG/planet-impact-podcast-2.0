<template>
  <div>
    <p-header heading="Contact Us" />
    <div class="container">
      <form
        class="w-full"
        name="Contact Form"
        data-netlify="true"
        method="post"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2  mb-6 md:mb-0 md:pr-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="w-full md:w-1/2 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="JaneDoe@email.com"
            />
            <!-- <p class="text-gray-600 text-xs italic">
            Some tips - as long as needed
          </p> -->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              We'd love to hear from you!
            </label>
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              placeholder="Anything goes!"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="shadow w-full lg:w-1/3 border-2 border-primary hover:bg-primary focus:shadow-outline focus:outline-none text-primary hover:text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>

    <section id="offices">
      <div class="container">
        <div class="flex justify-center">
          <h2 class="text-2xl uppercase font-bold">Our Offices</h2>
          <hr />
        </div>
        <div class="flex flex-col lg:flex-row space-y-4 items-baseline">
          <div class="w-full lg:w-1/3 text-center">
            <h3 class="text-2xl font-semibold">
              <i class="fa fa-map-pin" aria-hidden="true"></i> Australia
            </h3>
            <p class="text-lg">
              5 Figtree Dr, Sydney Olympic Park NSW 2127, Australia
            </p>
          </div>
          <div class="w-full lg:w-1/3 text-center">
            <h3 class="text-2xl font-semibold">
              <i class="fa fa-map-pin" aria-hidden="true"></i> Spain
            </h3>
            <p class="text-lg">
              Castello, 91, 6D, 28006, Madrid, Spain
            </p>
          </div>
          <div class="w-full lg:w-1/3 text-center">
            <h3 class="text-2xl font-semibold">
              <i class="fa fa-map-pin" aria-hidden="true"></i> India
            </h3>
            <p class="text-lg ">Ahmednagar, 414001 - India</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#offices {
  margin-top: 40px;
}

#offices h2 {
  padding-top: 50px;
  padding-bottom: 30px;
}

#offices h3,
#offices h2 {
  color: #22486a;
}
</style>
