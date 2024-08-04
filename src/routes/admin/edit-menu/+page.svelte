<script lang="ts">
	import EditMenuModal from "$lib/components/EditMenuModal.svelte";

    //import "https://fonts.googleapis.com/icon?family=Material+Icons";
    let isEditModalOpen = $state(false);

</script>

<div class="navbar max-w-xs justify-between mx-auto pt-2 flex">
    <button class="btn btn-primary text-white font-bold py-2 px-4 rounded-full flex-1 mx-1">Edit Mode</button>
    <button class="btn btn-default rounded-full flex-1 mx-1">Preview Mode</button>
  </div>
<div class="h-50 bg-gray-300 mx-auto rounded-b-2xl mt-2 mr-10 ml-10 flex flex-col items-center justify-center">
    <button class="btn btn-ghost hover:bg-gray-300 no-animation w-96 h-48 bg-gray-300 mx-auto rounded-b-2xl mt-2 flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" class="w-28 h-28 max-w-xs max-h-xs" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g><path style="opacity:0.958" fill="#636363" d="M 89.5,41.5 C 193.167,41.3333 296.834,41.5 400.5,42C 420.982,44.8144 435.482,55.6478 444,74.5C 445.408,78.0569 446.408,81.7235 447,85.5C 447.667,114.833 447.667,144.167 447,173.5C 442.214,179.771 436.381,180.937 429.5,177C 427.959,175.421 426.792,173.587 426,171.5C 425.967,142.785 425.301,114.118 424,85.5C 419.652,75.15 412.152,68.3167 401.5,65C 299.526,63.349 197.526,63.0157 95.5,64C 76.3333,65.8333 65.8333,76.3333 64,95.5C 63.3333,168.167 63.3333,240.833 64,313.5C 78.5606,298.271 93.7272,283.771 109.5,270C 127.16,260.778 145.16,260.112 163.5,268C 175.063,276.558 185.73,286.225 195.5,297C 199.302,299.828 203.302,300.161 207.5,298C 229.5,276 251.5,254 273.5,232C 294.262,216.932 315.928,215.598 338.5,228C 345.417,232.087 347.584,237.92 345,245.5C 341.212,250.153 336.378,251.653 330.5,250C 318.178,240.144 305.178,239.144 291.5,247C 268.195,269.305 245.195,291.972 222.5,315C 210.25,322.838 197.584,323.505 184.5,317C 175.196,308.697 166.196,300.031 157.5,291C 143.929,282.131 130.595,282.465 117.5,292C 99.6667,309.833 81.8333,327.667 64,345.5C 63.1118,364.198 63.4451,382.864 65,401.5C 68.9132,413.746 77.0799,421.579 89.5,425C 143.167,425.333 196.833,425.667 250.5,426C 260.336,432.036 261.003,439.036 252.5,447C 196.833,447.667 141.167,447.667 85.5,447C 67.0299,443.201 53.8632,432.701 46,415.5C 43.8873,410.716 42.5539,405.716 42,400.5C 41.3333,296.833 41.3333,193.167 42,89.5C 46.6792,62.3213 62.5125,46.3213 89.5,41.5 Z"/></g>
            <g><path style="opacity:0.946" fill="#636363" d="M 174.5,105.5 C 206.219,104.929 226.052,119.929 234,150.5C 236.839,180.345 224.339,200.511 196.5,211C 169.999,217.168 149.166,209.002 134,186.5C 120.762,157.621 126.595,133.454 151.5,114C 158.887,110.042 166.554,107.208 174.5,105.5 Z M 180.5,127.5 C 199.508,129.841 210.175,140.508 212.5,159.5C 210.242,178.258 199.742,188.925 181,191.5C 156.984,187.487 146.984,173.487 151,149.5C 156.54,136.17 166.374,128.837 180.5,127.5 Z"/></g>
            <g><path style="opacity:0.944" fill="#636363" d="M 407.5,192.5 C 411.22,192.564 414.886,193.064 418.5,194C 432.5,202 446.5,210 460.5,218C 468.46,224.882 470.96,233.382 468,243.5C 430.758,309.657 392.758,375.324 354,440.5C 350.592,443.453 347.092,446.287 343.5,449C 331.993,455.588 320.326,461.921 308.5,468C 292.328,471.835 282.495,465.668 279,449.5C 278.333,434.167 278.333,418.833 279,403.5C 279.798,400.107 280.798,396.774 282,393.5C 318.919,329.997 355.586,266.33 392,202.5C 395.9,196.98 401.067,193.647 407.5,192.5 Z M 410.5,215.5 C 422.801,221.984 434.801,228.984 446.5,236.5C 410,299.5 373.5,362.5 337,425.5C 325.665,433.003 313.998,440.003 302,446.5C 300.203,432.471 300.203,418.471 302,404.5C 338.178,341.473 374.345,278.473 410.5,215.5 Z"/></g>
            <g><path style="opacity:0.95" fill="#636363" d="M 436.5,349.5 C 441.258,349.961 444.758,352.294 447,356.5C 447.667,372.5 447.667,388.5 447,404.5C 441.5,427.333 427.333,441.5 404.5,447C 399.5,447.667 394.5,447.667 389.5,447C 382.586,443.23 380.753,437.73 384,430.5C 385.167,429.333 386.333,428.167 387.5,427C 399.991,426.954 410.491,422.454 419,413.5C 421.804,409.557 423.804,405.223 425,400.5C 425.333,386.5 425.667,372.5 426,358.5C 427.71,353.252 431.21,350.252 436.5,349.5 Z"/></g>
        </svg>
        <h1 class="mb-5 text-center text-lg text-[#636363]">Choose a backdrop image</h1>
    </button>    
</div>
<div class="h-48 mx-auto rounded-b-2xl mt-5 mr-10 ml-10 flex items-center justify-center">
    <div class="h-full w-1/3 bg-gray-300 mx-auto rounded-2xl mt-2 mr-10 grid grid-cols-2">
        <div class="flex items-center justify-left border-b pl-3 border-gray-500">
            <div class="p-1">Type:</div>
        </div>
        <div class="flex items-center justify-left border-b pl-3 border-gray-500">
            <div class="p-1">Coffee Shop</div>
        </div>
          <div class="flex items-center justify-left border-b pl-3 border-gray-500">
            <div class="p-1">Price Point:</div>
        </div>
        <div class="flex items-center justify-left border-b pl-3 border-gray-500">
            <div class="p-1">$</div>
        </div>
        <div class="flex items-center justify-left border-b pl-3 border-gray-500">
            <div class="p-1">Hours:</div>
        </div>
        <div class="flex items-center justify-left border-b pl-3 border-gray-500">
            <div class="p-1">6:00am - 8:30pm</div>
        </div>
        <div class="flex items-center justify-left pl-3">
            <div class="p-1">Location</div>
        </div>
        <div class="flex items-center justify-left pl-3">
            <div class="p-1">170 4th Ave N, Nashville, TN 37219</div>
        </div>
    </div>
    <div class="h-full w-2/3 bg-white mx-auto rounded-2xl border-2 border-primary mt-2 pt-5 pb-5 flex items-center justify-center">
        <div class="h-full w-1/2 pl-6 overflow-hidden">
            <h1 class="text-xl font-bold">Got a menu? Snap it or scan it!</h1>
            <p class="mt-3">Skip the hassle of typing out all the details. Upload a PDF or an image of your menu, and we'll take care of the rest.</p>
        </div>
        <div class="h-full w-1/2 border-4 rounded-xl border-gray-400 border-dashed mr-5 ml-12 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 512 512" class="w-8 h-8 max-w-xs max-h-xs" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g><path style="opacity:0.978" fill="#000000" d="M 250.5,51.5 C 255.777,50.9312 260.777,51.7645 265.5,54C 297,85.5 328.5,117 360,148.5C 365.987,159.188 363.821,167.688 353.5,174C 347.522,176.242 341.855,175.575 336.5,172C 315,150.5 293.5,129 272,107.5C 271.667,188.167 271.333,268.833 271,349.5C 268.193,356.487 263.027,359.82 255.5,359.5C 247.973,359.82 242.807,356.487 240,349.5C 239.667,268.833 239.333,188.167 239,107.5C 217.833,128.667 196.667,149.833 175.5,171C 161.375,177.104 152.375,172.77 148.5,158C 149.042,154.284 150.209,150.784 152,147.5C 182.833,116.667 213.667,85.8333 244.5,55C 246.432,53.5415 248.432,52.3748 250.5,51.5 Z"/></g>
                <g><path style="opacity:0.98" fill="#000000" d="M 49.5,307.5 C 57.4929,307.079 63.3262,310.412 67,317.5C 68.292,340.45 68.9586,363.45 69,386.5C 73.2798,407.447 85.7798,420.614 106.5,426C 156.147,427.143 205.813,427.643 255.5,427.5C 301.833,427.333 348.167,427.167 394.5,427C 420.476,425.355 436.31,411.855 442,386.5C 442.333,364.833 442.667,343.167 443,321.5C 447.814,308.081 456.648,304.581 469.5,311C 472.467,313.1 474.3,315.934 475,319.5C 475.667,343.167 475.667,366.833 475,390.5C 467.583,428.25 445.083,451.083 407.5,459C 304.465,459.989 201.465,459.656 98.5,458C 63.5065,448.671 42.6732,426.171 36,390.5C 35.3333,366.833 35.3333,343.167 36,319.5C 38.1962,312.798 42.6962,308.798 49.5,307.5 Z"/></g>
            </svg>
            <p class="text-center py-2 text-xs">Drag and drop files to upload<br>or</p>
            <input
            type="file"
            accept="file/pdf, image/jpg, image/jpeg, image/png"
            class="file-input file-input-bordered file-input-primary rounded-full w-64 h-7 text-xs" />
            <p class="text-[0.7rem] mt-1">Supports PDF, JPG, PNG</p>
        </div>
    </div>
</div>

<div>
    <h1 class="text-3xl font-bold pl-10 pt-14">Add/Edit Menu Items</h1>
</div>
<div class="h-48 mx-auto rounded-2xl mr-10 ml-10 mt-5 p-10 bg-gray-300 flex text-center justify-center">
    <button class="btn btn-primary text-2xl font-bold rounded-full" onclick={() => isEditModalOpen = true}>+</button>
    <EditMenuModal bind:isModalOpen={isEditModalOpen}/>
</div>