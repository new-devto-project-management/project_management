import React from "react";
import { Navlink, Link } from "react-router-dom";
import { render } from "react-dom";

import video from "../../../styles/assets/video.mp4";

import "../../../styles/components/functions/pages/index.css";


class Index0 extends React.Component {


  render() {

    return (
      <>
        <center className="index">

          <video autoPlay loop muted
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            right: "0%",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            objectFit: "cover",
            transform: 'translate(-50% -50%)',

          }}>
            <source src={video} type="video/mp4"/>
          </video>
          <header className="main-index">
            {/* <canvas className="cover" id="sparks"></canvas> */}
            <div className="main-header-content main-index-content">

              {/* create CRUUD  */}
              <span className="header-title">WELCOME ON OPEN PROJECT</span>
              {/* END CREATE  */}
            </div>
            <div className="logo">
              <svg width="128" height="199" viewBox="0 0 428 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 412.75L43.75 369L52.5875 377.837L23.925 406.5H150V419H23.925L52.5875 447.663L43.75 456.5L0 412.75Z" fill="#ED1225" />
                <path d="M189 354.75L145.25 311L136.413 319.837L165.075 348.5H39V361H165.075L136.413 389.663L145.25 398.5L189 354.75Z" fill="#4ECB71" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M77.413 455.716V268.155H103.011V455.716C103.011 459.543 104.359 463.213 106.76 465.919C109.16 468.624 112.415 470.144 115.81 470.144H346.19C349.585 470.144 352.84 468.624 355.241 465.919C357.641 463.213 358.989 459.543 358.989 455.716V268.155H384.587V455.716C384.587 467.196 380.542 478.205 373.341 486.323C366.14 494.44 356.374 499 346.19 499H115.81C105.626 499 95.8599 494.44 88.6591 486.323C81.4583 478.205 77.413 467.196 77.413 455.716ZM358.989 138.304V239.299L307.794 181.588V138.304C307.794 134.478 309.142 130.808 311.542 128.102C313.943 125.396 317.198 123.876 320.593 123.876H346.19C349.585 123.876 352.84 125.396 355.241 128.102C357.641 130.808 358.989 134.478 358.989 138.304Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M212.902 109.449C217.703 104.039 224.212 101 231 101C237.788 101 244.297 104.039 249.098 109.449L419.247 301.223C421.65 303.932 423 307.607 423 311.438C423 315.27 421.65 318.944 419.247 321.653C416.843 324.362 413.584 325.884 410.185 325.884C406.786 325.884 403.527 324.362 401.123 321.653L231 129.85L60.8767 321.653C58.4734 324.362 55.2139 325.884 51.8151 325.884C48.4163 325.884 45.1567 324.362 42.7535 321.653C40.3502 318.944 39 315.27 39 311.438C39 307.607 40.3502 303.932 42.7535 301.223L212.902 109.449Z" fill="black" />
                <path d="M294.529 365.143C301.429 365.143 307.029 370.743 307.029 377.643V425.85C307.029 436.271 302.889 446.265 295.52 453.634C288.151 461.003 278.157 465.143 267.736 465.143C257.315 465.143 247.32 461.003 239.951 453.634C232.583 446.265 228.443 436.271 228.443 425.85V377.643C228.443 370.743 234.036 365.143 240.943 365.143H294.529ZM194.5 365.143L225.8 365.129C223.226 368.23 221.676 372.053 221.364 376.071L221.293 377.643V425.85C221.293 433.943 223.371 441.557 227.007 448.186C222.114 450.321 216.766 451.204 211.445 450.755C206.125 450.305 201.001 448.538 196.535 445.613C192.068 442.688 188.401 438.696 185.863 433.999C183.326 429.302 181.998 424.046 182 418.707V377.643C182.002 374.327 183.32 371.148 185.666 368.804C188.011 366.46 191.191 365.143 194.507 365.143H194.5ZM309.671 365.129L340.929 365.143C347.829 365.143 353.429 370.743 353.429 377.643V418.714C353.431 424.051 352.104 429.305 349.568 434C347.032 438.696 343.367 442.687 338.903 445.612C334.439 448.537 329.317 450.305 323.999 450.755C318.682 451.206 313.335 450.325 308.443 448.193L308.843 447.464C311.907 441.657 313.771 435.114 314.114 428.179L314.171 425.85V377.643C314.171 372.886 312.479 368.529 309.671 365.129ZM267.714 308C270.997 308 274.248 308.647 277.281 309.903C280.315 311.159 283.07 313.001 285.392 315.322C287.713 317.644 289.555 320.4 290.811 323.433C292.068 326.466 292.714 329.717 292.714 333C292.714 336.283 292.068 339.534 290.811 342.567C289.555 345.6 287.713 348.356 285.392 350.678C283.07 352.999 280.315 354.841 277.281 356.097C274.248 357.353 270.997 358 267.714 358C261.084 358 254.725 355.366 250.037 350.678C245.348 345.989 242.714 339.63 242.714 333C242.714 326.37 245.348 320.011 250.037 315.322C254.725 310.634 261.084 308 267.714 308ZM324.879 315.143C327.693 315.143 330.479 315.697 333.079 316.774C335.679 317.851 338.041 319.429 340.031 321.419C342.021 323.409 343.599 325.771 344.676 328.371C345.753 330.971 346.307 333.757 346.307 336.571C346.307 339.385 345.753 342.172 344.676 344.772C343.599 347.372 342.021 349.734 340.031 351.724C338.041 353.714 335.679 355.292 333.079 356.369C330.479 357.446 327.693 358 324.879 358C319.195 358 313.745 355.742 309.726 351.724C305.708 347.705 303.45 342.255 303.45 336.571C303.45 330.888 305.708 325.438 309.726 321.419C313.745 317.401 319.195 315.143 324.879 315.143ZM210.55 315.143C213.364 315.143 216.151 315.697 218.75 316.774C221.35 317.851 223.712 319.429 225.702 321.419C227.692 323.409 229.271 325.771 230.347 328.371C231.424 330.971 231.979 333.757 231.979 336.571C231.979 339.385 231.424 342.172 230.347 344.772C229.271 347.372 227.692 349.734 225.702 351.724C223.712 353.714 221.35 355.292 218.75 356.369C216.151 357.446 213.364 358 210.55 358C204.867 358 199.416 355.742 195.398 351.724C191.379 347.705 189.121 342.255 189.121 336.571C189.121 330.888 191.379 325.438 195.398 321.419C199.416 317.401 204.867 315.143 210.55 315.143Z" fill="black" />
                <path d="M148.021 267.667H117.688C115.787 267.667 113.944 267.018 112.463 265.826C110.982 264.635 109.953 262.973 109.546 261.117L106.154 245.417C101.63 243.434 97.3396 240.955 93.3627 238.025L78.0543 242.9C76.2424 243.478 74.2873 243.418 72.5137 242.732C70.7401 242.045 69.2548 240.772 68.3043 239.125L53.1043 212.867C52.1639 211.218 51.8109 209.299 52.103 207.423C52.3952 205.547 53.3152 203.826 54.7127 202.542L66.5877 191.708C66.0476 186.801 66.0476 181.849 66.5877 176.942L54.7127 166.133C53.3133 164.848 52.392 163.126 52.0998 161.248C51.8075 159.371 52.1618 157.45 53.1043 155.8L68.271 129.525C69.2214 127.878 70.7068 126.605 72.4803 125.918C74.2539 125.232 76.209 125.172 78.021 125.75L93.3293 130.625C95.3627 129.125 97.4793 127.725 99.6627 126.458C101.771 125.275 103.938 124.2 106.154 123.242L109.554 107.558C109.959 105.702 110.986 104.039 112.466 102.846C113.945 101.653 115.787 101.002 117.688 101H148.021C149.921 101.002 151.764 101.653 153.243 102.846C154.722 104.039 155.75 105.702 156.154 107.558L159.588 123.25C164.11 125.232 168.397 127.712 172.371 130.642L187.688 125.767C189.499 125.191 191.452 125.251 193.224 125.938C194.995 126.625 196.479 127.896 197.429 129.542L212.596 155.817C214.529 159.208 213.863 163.5 210.988 166.142L199.113 176.975C199.653 181.882 199.653 186.834 199.113 191.742L210.988 202.575C213.863 205.225 214.529 209.508 212.596 212.9L197.429 239.175C196.479 240.822 194.994 242.095 193.22 242.782C191.446 243.468 189.491 243.528 187.679 242.95L172.371 238.075C168.397 241.003 164.11 243.479 159.588 245.458L156.154 261.117C155.748 262.972 154.72 264.632 153.241 265.824C151.762 267.015 149.92 267.665 148.021 267.667ZM96.3543 219.575L103.188 224.575C104.729 225.708 106.329 226.75 107.996 227.7C109.563 228.608 111.163 229.425 112.821 230.167L120.596 233.575L124.404 251H141.321L145.129 233.567L152.904 230.158C156.296 228.658 159.521 226.8 162.513 224.608L169.346 219.608L186.363 225.025L194.821 210.375L181.629 198.35L182.563 189.917C182.979 186.225 182.979 182.5 182.563 178.817L181.629 170.383L194.829 158.333L186.363 143.675L169.354 149.092L162.513 144.092C159.519 141.889 156.298 140.014 152.904 138.5L145.129 135.092L141.321 117.667H124.404L120.571 135.1L112.821 138.5C109.423 139.988 106.2 141.85 103.213 144.05L96.371 149.05L79.371 143.633L70.896 158.333L84.0877 170.342L83.1543 178.783C82.7377 182.475 82.7377 186.2 83.1543 189.883L84.0877 198.317L70.896 210.342L79.3543 224.992L96.3543 219.575ZM132.821 217.667C123.98 217.667 115.502 214.155 109.251 207.904C103 201.652 99.4877 193.174 99.4877 184.333C99.4877 175.493 103 167.014 109.251 160.763C115.502 154.512 123.98 151 132.821 151C141.662 151 150.14 154.512 156.391 160.763C162.642 167.014 166.154 175.493 166.154 184.333C166.154 193.174 162.642 201.652 156.391 207.904C150.14 214.155 141.662 217.667 132.821 217.667ZM132.821 167.667C129.557 167.67 126.366 168.631 123.644 170.432C120.922 172.232 118.788 174.792 117.508 177.794C116.227 180.796 115.856 184.108 116.441 187.319C117.025 190.53 118.54 193.498 120.796 195.856C123.053 198.214 125.952 199.858 129.134 200.583C132.316 201.309 135.641 201.084 138.697 199.936C141.752 198.789 144.403 196.77 146.322 194.13C148.24 191.489 149.341 188.344 149.488 185.083V188.417V184.333C149.488 179.913 147.732 175.674 144.606 172.548C141.481 169.423 137.241 167.667 132.821 167.667Z" fill="black" />
                <path d="M426.552 32.3657C376.17 -10.7965 297.81 -10.7807 247.447 32.3657C245.553 33.9882 245.516 36.7354 247.348 38.4185L257.085 47.3659C258.831 48.9726 261.64 49.0069 263.455 47.466C304.951 12.2557 369.043 12.2478 410.548 47.466C412.362 49.0069 415.172 48.97 416.918 47.3659L426.655 38.4185C428.483 36.7354 428.446 33.9882 426.552 32.3657ZM337 84.2857C326.947 84.2857 318.8 91.8319 318.8 101.143C318.8 110.454 326.947 118 337 118C347.052 118 355.2 110.454 355.2 101.143C355.2 91.8319 347.052 84.2857 337 84.2857ZM394.634 62.2687C361.857 35.4211 312.106 35.4501 279.365 62.2687C277.403 63.8754 277.341 66.6647 279.203 68.3663L288.997 77.319C290.704 78.8783 293.451 78.9836 295.268 77.5297C319.141 58.4153 354.913 58.4574 378.729 77.5297C380.546 78.9836 383.293 78.8809 384.999 77.319L394.793 68.3663C396.659 66.6647 396.593 63.8728 394.634 62.2687Z" fill="black" />
                <path d="M236.192 277.528H219.215V265.792H236.192C238.697 265.792 240.707 265.375 242.223 264.54C243.769 263.705 244.898 262.561 245.609 261.107C246.351 259.623 246.722 257.953 246.722 256.098C246.722 254.18 246.351 252.402 245.609 250.763C244.898 249.093 243.769 247.748 242.223 246.728C240.707 245.707 238.697 245.197 236.192 245.197H224.688V301H209.566V233.461H236.192C241.573 233.461 246.181 234.435 250.016 236.383C253.881 238.332 256.834 241.007 258.875 244.408C260.947 247.779 261.983 251.645 261.983 256.005C261.983 260.365 260.947 264.153 258.875 267.37C256.834 270.586 253.881 273.091 250.016 274.884C246.181 276.647 241.573 277.528 236.192 277.528ZM284.945 261.339V301H270.472V250.81H284.063L284.945 261.339ZM283.089 274.142L279.425 274.235C279.425 270.709 279.842 267.478 280.677 264.54C281.543 261.571 282.796 258.989 284.435 256.793C286.074 254.598 288.099 252.897 290.511 251.691C292.954 250.485 295.768 249.882 298.954 249.882C301.18 249.882 303.206 250.222 305.03 250.902C306.855 251.552 308.417 252.588 309.715 254.01C311.045 255.402 312.066 257.226 312.777 259.484C313.488 261.71 313.844 264.385 313.844 267.509V301H299.371V269.271C299.371 267.045 299.093 265.36 298.536 264.215C298.01 263.04 297.237 262.236 296.217 261.803C295.196 261.37 293.975 261.154 292.552 261.154C291.006 261.154 289.63 261.494 288.424 262.174C287.249 262.824 286.259 263.736 285.455 264.911C284.651 266.086 284.048 267.462 283.646 269.04C283.275 270.617 283.089 272.318 283.089 274.142ZM312.359 273.4L307.767 273.771C307.767 270.369 308.169 267.215 308.973 264.308C309.777 261.401 310.983 258.881 312.591 256.747C314.199 254.582 316.194 252.897 318.575 251.691C320.987 250.485 323.786 249.882 326.971 249.882C329.321 249.882 331.455 250.222 333.373 250.902C335.321 251.583 336.991 252.681 338.382 254.196C339.805 255.711 340.903 257.706 341.676 260.18C342.449 262.623 342.835 265.622 342.835 269.179V301H328.27V269.179C328.27 266.983 327.992 265.313 327.435 264.169C326.909 263.025 326.136 262.236 325.116 261.803C324.126 261.37 322.936 261.154 321.544 261.154C319.998 261.154 318.653 261.479 317.508 262.128C316.364 262.746 315.405 263.612 314.632 264.726C313.859 265.808 313.287 267.091 312.916 268.576C312.545 270.06 312.359 271.668 312.359 273.4Z" fill="black" />
              </svg>

            </div>

            {/*  */}
            <div className="flex flex-content">
              <section className="entries">
                {/* redirecte to index1 */}
                <button className="fancy">
                  <Link to="/Index1" className="entries-title">OPEN NEW PROJECT </Link>
                </button>


                <article>
                  {/* i ahve bugs */}
                  <p>TO OPEN NEW PROJECT HERE !!</p>
                </article>

              </section>

              <section className="entries">
                <button className="fancy">
                  <Link to="/Index2">OPEN RECENT PROJECT</Link>
                </button>
                <article>
                  {/* i ahve bugs */}
                  <p>TO OPEN A RECENT PROJECT HERE !</p>
                </article>
              </section>
            </div>

            {/*  */}

          </header>




          {/* end header */}

        </center>
      </>
    )
  }
};

export default Index0;

