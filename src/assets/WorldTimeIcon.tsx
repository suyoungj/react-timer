export const WorldTimeIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1668 1.04748V1.9309C16.1668 2.45038 16.397 2.94186 16.7967 3.2747L18.4576 4.65894C19.145 5.23286 19.2896 6.22982 18.7935 6.97638L18.0004 8.16776C17.5685 8.8151 16.9331 9.3 16.1948 9.54578L15.9724 9.62044C15.7215 9.70435 15.4933 9.84498 15.3055 10.0314C15.1177 10.2178 14.9754 10.445 14.8897 10.6954C14.804 10.9457 14.7771 11.2125 14.8111 11.4749C14.8451 11.7373 14.9392 11.9883 15.086 12.2085C15.6599 13.0717 15.3488 14.2413 14.422 14.7048L10.335 16.7485L10.9928 18.3956C11.1255 18.7301 11.1324 19.1014 11.0121 19.4406C10.8919 19.7798 10.6527 20.0639 10.339 20.2402C10.0252 20.4164 9.65823 20.4729 9.30603 20.3991C8.95383 20.3253 8.64033 20.1263 8.4237 19.8389L7.36775 18.4298C7.18879 18.1913 6.95184 18.0025 6.67941 17.8813C6.40697 17.7601 6.10809 17.7105 5.81113 17.7374C5.51417 17.7642 5.22898 17.8664 4.98264 18.0344C4.73631 18.2024 4.53699 18.4306 4.40361 18.6973L3.33677 20.8312L2.38502 21.0692M16.1668 1.04748C13.7082 0.841138 11.2387 1.29 9.00866 2.34563C6.77858 3.40125 4.86714 5.02768 3.46802 7.06011C2.0689 9.09253 1.23184 11.4587 1.04165 13.9189C0.851461 16.3791 1.3149 18.8458 2.38502 21.0692M16.1668 1.04748C18.6049 1.25083 20.947 2.0913 22.9597 3.48213C24.9725 4.87296 26.5856 6.76713 27.6382 8.97581C28.6908 11.1845 29.1462 13.6305 28.9589 16.0701C28.7716 18.5096 27.9483 20.8575 26.5709 22.8796L26.2956 22.0568C26.0632 21.3601 25.6175 20.7541 25.0216 20.3248C24.4256 19.8954 23.7098 19.6645 22.9753 19.6647H21.9987L21.4948 19.1608C21.2417 18.9073 20.932 18.7175 20.5911 18.6073C20.2503 18.497 19.8881 18.4694 19.5345 18.5266C19.1808 18.5839 18.8459 18.7245 18.5572 18.9367C18.2686 19.1489 18.0346 19.4267 17.8744 19.7472L17.8184 19.8607C17.6657 20.1665 17.4511 20.4373 17.1882 20.6558C16.9253 20.8742 16.6198 21.0357 16.2913 21.1299L14.7516 21.5685C13.8963 21.8126 13.3613 22.6603 13.5075 23.5391L13.621 24.2203C13.7455 24.9575 14.3831 25.4972 15.1296 25.4972C16.4452 25.4972 17.6147 26.3402 18.0299 27.5891L18.3643 28.5892M2.38502 21.0692C3.77907 23.968 6.12885 26.2982 9.03907 27.6678C11.9493 29.0374 15.2424 29.3627 18.3643 28.5892M18.3643 28.5892C21.7078 27.7597 24.6287 25.7277 26.5693 22.8812M20.8323 10.3328C20.8323 11.7263 20.2211 12.9768 19.2523 13.8323"
        stroke={isActive ? '#b52c45' : 'black'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
