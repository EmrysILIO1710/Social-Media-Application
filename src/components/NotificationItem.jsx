const NotificationItem = ({ imgSrc, title, description }) => (
  <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 text-left transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div class="mt-7 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <img class="rounded-full" src={imgSrc} alt="" />
    </div>
    <div>
      <a href="#" class="font-semibold text-gray-900">
        {title}
        <span class="absolute inset-0"></span>
      </a>
      <p class="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

export default NotificationItem;
