import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Link} from "react-router-dom";
import "../styles/components/navigation.css";
// import "../styles/components/Navigation.scss"

export default class Navigation extends Component {
  state = {
    componentName : ''

  }
  // montrerModalFile = () => {
  //  this.setState({
  //    showFile : !this.state.showFile
  //  })
  // }
  // montrerModalTask = () => {
  //   this.setState({
  //     show : !this.state.show
  //   })
  //  }


   handleShow = (name) => {
    this.setState({componentName:name.toLowerCase()});
    console.log(this.state)
   }
   viewComponent = () => {
     console.log("Trigger");
     switch(this.state.componentName) {
       case 'files' : 
                return (
              <div className="modals-group">
                <ul className="list-group modals">
                          <Link className="list-group-item">
                            Open New Project
                          </Link>
                          <Link className="list-group-item">
                            Open recents Project
                          </Link>
                          <Link className="list-group-item">
                            New File
                          </Link>
                        
                          <Link className="list-group-item">
                            Save
                          </Link>
                          <Link className="list-group-item">
                            Save As
                          </Link>
                          <Link className="list-group-item">
                            Export 
                          </Link>
                        </ul>
              </div>
            );
            // tasks
            case 'tasks' : 
                return (
              <div className="modals-group">
                <ul className="list-group modals">
                          <Link className="list-group-item">
                          creact New Tasks
                          </Link>
                          <Link className="list-group-item">
                            Open recents Project
                          </Link>
                          <Link className="list-group-item">
                            New File
                          </Link>
                        
                        </ul>
              </div>
            );
            //Ress 
            case 'ressources' : 
                return (
              <div className="modals-group">
                <ul className="list-group modals">
                          <Link className="list-group-item">
                            create New Tasks
                          </Link>
                          <Link className="list-group-item">
                            Read Tasks 
                          </Link>
                          <Link className="list-group-item">
                            Delete Tasks
                          </Link>
                        
                        </ul>
              </div>
            );
            // tools
            case 'tools' : 
                return (
              <div className="modals-group">
                <ul className="list-group modals">
                          <Link className="list-group-item">
                            create Diagram
                          </Link>
                          <Link className="list-group-item">
                            Read pert
                          </Link>
                          <Link className="list-group-item">
                            Read WBS
                          </Link>
                        
                        </ul>
              </div>
            );
            // settings
            case 'settings' : 
                return (
              <div className="modals-group">
                <ul className="list-group modals">
                          <Link className="list-group-item">
                            settings App
                          </Link>
                          <Link className="list-group-item">
                            a bout 
                          </Link>
                          <Link className="list-group-item">
                            helps
                          </Link>
                        
                        </ul>
              </div>
            );

            
            
      default :
      return null;

    }

   }


  render (){
   return(
    <>
      <main>
        <div className="container">
          <div className="container-fuild">
            <div className="app-header">
              <div className="navigation frozen">
              
                <div className="open-project">
                  
                  {/* logo */}
                    <Link exact to="/" ng-click="base.mainPage=false">
                        <li className="nav-links current entries">
                        <span  class="page-title entries-title"><big>O</big>pen<strong> Project</strong></span>
                        </li>
                    </Link>
                </div>
                  
                  {/* menu */}
                <div className="nav">
                  <ul className="nav-bar">
                  <div className="menu-icon" >
                      {/* <i className={ click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                    </div>
                    <Link to="" onClick={()=>this.handleShow('files')} >
                        <li className="nav-links nav-links-mobile file">
                          <span >
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_20_11)">
                                      <path d="M12 0H11.921C10.261 0 8.68201 0.349 7.25401 0.978L7.32801 0.949C5.90786 1.55945 4.61586 2.43277 3.52001 3.523C2.44859 4.59708 1.58656 5.8613 0.97801 7.251L0.94701 7.33C0.316935 8.77757 -0.005545 10.3403 9.51713e-06 11.919V12.005V12.001V12.08C9.51713e-06 13.74 0.34901 15.319 0.97801 16.747L0.94901 16.673C1.55912 18.0926 2.43173 19.3842 3.52101 20.48C4.59547 21.5514 5.86001 22.4135 7.25001 23.022L7.32901 23.053C8.68301 23.653 10.262 24.002 11.922 24.002H12.005H12.001H12.08C13.74 24.002 15.319 23.653 16.747 23.024L16.673 23.053C18.0934 22.4428 19.3857 21.5698 20.482 20.48C21.5534 19.4059 22.4155 18.1417 23.024 16.752L23.055 16.673C23.655 15.319 24.004 13.741 24.004 12.08V11.922C24.004 10.262 23.655 8.683 23.026 7.255L23.055 7.329C22.4443 5.90984 21.5714 4.6186 20.482 3.523C19.4079 2.45158 18.1437 1.58955 16.754 0.981L16.675 0.95C15.321 0.35 13.741 0 12.08 0H11.997H12.001H12ZM12.64 22.79V20.703L17.833 18.07C17.894 18.0401 17.9468 17.9958 17.987 17.941L17.988 17.94C18.0267 17.8838 18.0472 17.8172 18.047 17.749V17.738V17.739V16.553C18.272 16.471 18.459 16.327 18.59 16.141L18.592 16.137C18.725 15.958 18.806 15.733 18.806 15.489V15.371C18.7816 15.0853 18.651 14.8191 18.44 14.625L18.439 14.624C18.2362 14.4327 17.9678 14.3264 17.689 14.327H17.667H17.668H17.648C17.34 14.327 17.061 14.454 16.862 14.659C16.657 14.859 16.53 15.137 16.53 15.446V15.467V15.466V15.525C16.532 15.555 16.541 15.582 16.554 15.606V15.605C16.567 15.827 16.65 16.028 16.781 16.188L16.78 16.186C16.913 16.349 17.084 16.475 17.281 16.55L17.289 16.553V17.502L12.64 19.874V17.932L14.679 16.983C14.7424 16.9512 14.7989 16.907 14.845 16.853L14.846 16.852C14.8919 16.7978 14.9171 16.729 14.917 16.658V13.425L18.71 11.291C18.7713 11.2605 18.8211 11.2111 18.852 11.15L18.853 11.148C18.8837 11.0897 18.8999 11.0249 18.9 10.959V10.058C19.123 9.979 19.309 9.84 19.443 9.661L19.445 9.658C19.578 9.481 19.659 9.257 19.659 9.014V8.974C19.659 8.666 19.532 8.387 19.327 8.188C19.2272 8.08287 19.107 7.99921 18.9737 7.94212C18.8405 7.88504 18.697 7.85573 18.552 7.856H18.4C18.1253 7.88298 17.8713 8.01391 17.69 8.222L17.689 8.223C17.505 8.42785 17.4035 8.69364 17.404 8.969V8.994V8.993V9.013C17.404 9.256 17.484 9.479 17.62 9.659L17.618 9.656C17.755 9.838 17.94 9.977 18.156 10.053L18.164 10.056V10.744L14.346 12.878C14.2956 12.9129 14.2519 12.9566 14.217 13.007L14.216 13.009C14.1803 13.0637 14.1612 13.1276 14.161 13.193V13.21V13.209V16.409L12.641 17.12V10.148L15.841 8.582C15.9042 8.55019 15.9572 8.50135 15.994 8.441L15.995 8.439C16.0326 8.38307 16.0531 8.31739 16.054 8.25V7.04C16.277 6.961 16.463 6.822 16.597 6.643L16.599 6.64C16.732 6.463 16.813 6.239 16.813 5.996V5.975V5.976V5.915C16.8131 5.90436 16.811 5.89382 16.8069 5.88402C16.8028 5.87422 16.7967 5.86536 16.789 5.858C16.7599 5.58138 16.6296 5.32529 16.423 5.139L16.422 5.138C16.2239 4.94694 15.9592 4.84043 15.684 4.841H15.556C15.2771 4.87144 15.0202 5.00652 14.837 5.219L14.836 5.22C14.6449 5.42454 14.5387 5.69409 14.539 5.974V6.097C14.571 6.324 14.659 6.525 14.79 6.693L14.788 6.69C14.915 6.857 15.089 6.981 15.29 7.044L15.297 7.046V8.018L12.641 9.322V5.288C12.866 5.206 13.053 5.062 13.184 4.876L13.186 4.872C13.319 4.693 13.4 4.468 13.4 4.224V4.2C13.4 3.892 13.273 3.613 13.068 3.414C12.9658 3.30875 12.8434 3.22513 12.7082 3.1681C12.573 3.11107 12.4277 3.08179 12.281 3.082H12.26H12.261H12.241C11.933 3.082 11.654 3.209 11.455 3.414C11.25 3.614 11.123 3.892 11.123 4.201V4.222V4.221V4.339C11.153 4.562 11.242 4.76 11.373 4.922L11.371 4.92C11.504 5.083 11.675 5.209 11.872 5.284L11.88 5.287V11.856L10.006 10.86V7.865C10.0059 7.80813 9.98925 7.75252 9.95801 7.705L9.95901 7.706C9.93088 7.66363 9.89909 7.62381 9.86401 7.587L8.55801 6.589C8.58952 6.52688 8.61304 6.46103 8.62801 6.393L8.62901 6.387C8.64401 6.32 8.65301 6.244 8.65301 6.165V6.141C8.65301 5.833 8.52601 5.554 8.32101 5.355C8.21873 5.25015 8.09649 5.16684 7.96149 5.10999C7.8265 5.05314 7.68149 5.0239 7.53501 5.024H7.52001H7.52101H7.50101C7.19301 5.024 6.91401 5.151 6.71501 5.356C6.51001 5.556 6.38301 5.834 6.38301 6.143V6.164V6.163V6.187C6.38301 6.492 6.50801 6.768 6.70901 6.967C6.90901 7.172 7.18701 7.299 7.49601 7.299H7.51701H7.51601H7.53101C7.6291 7.29925 7.72652 7.28268 7.81901 7.25L7.81301 7.252C7.92301 7.211 8.01301 7.171 8.10001 7.127L8.08501 7.134L9.24701 8.059V11.094C9.24671 11.1583 9.26782 11.221 9.30701 11.272L9.30601 11.271C9.34559 11.3256 9.39772 11.3698 9.45801 11.4L9.46001 11.401L11.879 12.681V15.1L7.82401 13.226L7.89501 11.756V11.732C7.89531 11.6677 7.8742 11.605 7.83501 11.554L7.83601 11.555C7.79643 11.5004 7.7443 11.4562 7.68401 11.426L7.68201 11.425L5.83101 10.455C5.84697 10.4042 5.85506 10.3513 5.85501 10.298V10.098C5.82591 9.82138 5.69555 9.56529 5.48901 9.379L5.48801 9.378C5.28483 9.18579 5.0157 9.07878 4.73601 9.079H4.71801H4.71901H4.71201C4.40701 9.079 4.13201 9.206 3.93701 9.411C3.72901 9.611 3.59901 9.892 3.59901 10.203V10.218V10.217V10.335C3.62801 10.62 3.76301 10.869 3.96501 11.045L3.96601 11.046C4.15901 11.223 4.41701 11.331 4.70101 11.331H4.83201C4.94489 11.3164 5.05565 11.2885 5.16201 11.248L5.15201 11.251C5.25601 11.211 5.34701 11.159 5.42701 11.095L5.42501 11.097L7.13201 11.977L7.08501 13.447V13.455C7.08501 13.53 7.10201 13.6 7.13301 13.663L7.13201 13.66C7.16743 13.7258 7.22579 13.7764 7.29601 13.802L7.29801 13.803L11.875 15.937V22.806C11.6697 22.806 11.468 22.798 11.27 22.782L10.665 22.735L10.736 18.371C10.7351 18.3028 10.7142 18.2364 10.676 18.18L10.677 18.181C10.6352 18.1163 10.5739 18.0666 10.502 18.039L10.5 18.038L7.63001 16.71V16.585C7.63001 16.28 7.50301 16.005 7.29801 15.81C7.19577 15.7048 7.07341 15.6211 6.93822 15.5641C6.80302 15.5071 6.65774 15.4778 6.51101 15.478H6.49001H6.49101H6.37701C6.10232 15.505 5.84833 15.6359 5.66701 15.844L5.66601 15.845C5.482 16.0499 5.38046 16.3156 5.38101 16.591V16.616V16.615V16.622C5.38101 16.927 5.50801 17.202 5.71301 17.397C5.90801 17.602 6.18301 17.729 6.48801 17.729H6.52701C6.68301 17.729 6.83201 17.696 6.96601 17.635L6.95901 17.638C7.09901 17.571 7.22001 17.491 7.32801 17.396L7.32601 17.398L9.98201 18.608V22.616C8.73311 22.3835 7.53612 21.9286 6.44801 21.273L6.49601 21.3C5.4458 20.677 4.50829 19.8811 3.72301 18.946L3.70901 18.929C2.9354 17.9981 2.31927 16.9468 1.88501 15.817L1.85901 15.741C1.40788 14.5601 1.1787 13.3061 1.18301 12.042V11.931C1.18301 10.437 1.49701 9.016 2.06301 7.73L2.03701 7.797C2.5876 6.51392 3.37615 5.3467 4.36101 4.357C5.33176 3.3902 6.47429 2.61291 7.73001 2.065L7.80101 2.037C9.1064 1.46776 10.5159 1.17625 11.94 1.181H12.001H11.998H12.062C13.556 1.181 14.977 1.495 16.263 2.061L16.196 2.035C17.4786 2.58478 18.6457 3.37191 19.636 4.355C20.6046 5.32512 21.3833 6.46774 21.932 7.724L21.96 7.795C22.5 9.013 22.814 10.434 22.814 11.929V11.996V11.993V12.057C22.814 13.501 22.522 14.877 21.994 16.129L22.02 16.06C21.506 17.3072 20.7689 18.4502 19.845 19.433L19.85 19.427C18.9427 20.3869 17.8677 21.1732 16.678 21.747L16.613 21.775C15.453 22.343 14.097 22.707 12.665 22.784L12.639 22.785L12.64 22.79Z" fill="black"/>
                                      </g>
                                      <defs>
                                      <clipPath id="clip0_20_11">
                                      <rect width="24" height="24" fill="white"/>
                                      </clipPath>
                                      </defs>
                                      </svg>
                            </span>
                            <span>File</span>
                          </span>

                        </li> 
                    </Link>
                   
                    <Link to="/" onClick={()=>this.handleShow('tasks')}  >
                        <li className="nav-links nav-links-mobile">
                        
                       
                          <span><span>
                        <svg width="27" height="29" viewBox="0 0 87 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.51 6.14193e-07L25.45 0.0160006C24.6423 0.015753 23.8594 0.294863 23.234 0.806001L1.284 16.781C0.882566 17.1094 0.559122 17.5228 0.33706 17.9915C0.114999 18.4602 -0.000129923 18.9724 1.10028e-07 19.491V84.75C1.10028e-07 85.6783 0.368749 86.5685 1.02513 87.2249C1.6815 87.8813 2.57174 88.25 3.5 88.25H6.03C5.965 82.13 6.019 76.004 6 69.883C5.716 66.439 8.62 63.114 12.082 62.984C13.388 62.982 14.694 62.984 16 62.982V46.5H21V62.982C34.333 62.97 47.666 62.97 61 62.969V46.5H65.984V62.967H69.068C72.374 62.708 75.594 65.321 75.943 68.633C76.055 75.156 75.99 81.687 76 88.213H78.484C79.4123 88.213 80.3025 87.8443 80.9589 87.1879C81.6152 86.5315 81.984 85.6413 81.984 84.713L81.998 51.5H83.25C84.1783 51.5 85.0685 51.1312 85.7249 50.4749C86.3813 49.8185 86.75 48.9283 86.75 48V38.5C86.75 37.5717 86.3813 36.6815 85.7249 36.0251C85.0685 35.3688 84.1783 35 83.25 35H81.99L81.984 19.451C81.9839 18.9325 81.8685 18.4204 81.6463 17.9519C81.424 17.4834 81.1005 17.0702 80.699 16.742L58.727 0.790001C58.1013 0.278645 57.318 -0.000477885 56.51 6.14193e-07V6.14193e-07ZM55.264 7L73.564 19.951H69.484C68.5557 19.951 67.6655 20.3197 67.0091 20.9761C66.3527 21.6325 65.984 22.5227 65.984 23.451V39.5H61V23H21V39.5H16V23.488C16 22.5597 15.6313 21.6695 14.9749 21.0131C14.3185 20.3567 13.4283 19.988 12.5 19.988H8.414L26.704 7.016L55.263 7H55.264ZM40.988 32.268H41C46.927 32.268 51.732 37.073 51.732 43C51.732 48.927 46.927 53.732 41 53.732C35.073 53.732 30.268 48.927 30.268 43C30.268 37.077 35.066 32.274 40.988 32.268ZM12.5 66.967C11.837 66.967 11.2011 67.2304 10.7322 67.6992C10.2634 68.1681 10 68.804 10 69.467V90C10 90.663 10.2634 91.2989 10.7322 91.7678C11.2011 92.2366 11.837 92.5 12.5 92.5H22.723V99H59.277V92.5H69.5C70.163 92.5 70.7989 92.2366 71.2678 91.7678C71.7366 91.2989 72 90.663 72 90V69.467C72 68.804 71.7366 68.1681 71.2678 67.6992C70.7989 67.2304 70.163 66.967 69.5 66.967H12.5ZM17.34 73.232H42.586V86.232H17.34V73.232ZM51.867 73.232H56.867V78.232H51.867V73.232ZM59.867 73.232H64.867V78.232H59.867V73.232ZM51.867 81.232H56.867V86.232H51.867V81.232ZM59.867 81.232H64.867V86.232H59.867V81.232Z" fill="black"/>
                        </svg></span> Tasks<span> <i className='fab fa-get-pocket'/></span></span>                          
                        </li>
                        {/* {dropdown && <Dropdown/>} */}
                    </Link>
                    <Link to="" onClick={()=>this.handleShow('Ressources')}>
                        <li className="nav-links nav-links-mobile">
                          <span className="resources">
                            <span><svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0H20C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H8C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18V2C6 1.46957 6.21071 0.960859 6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0V0ZM14.75 11.5C17.5 11.5 18.24 9.47 18.43 8.4C19.34 8.11 20 7.26 20 6.25C20 5 19 4 17.75 4C16.5 4 15.5 5 15.5 6.25C15.5 7.19 16.07 8 16.89 8.33C16.67 9 16 10 14 10C12.62 10 11.66 10.35 11 10.84V6.87C11.87 6.56 12.5 5.73 12.5 4.75C12.5 3.5 11.5 2.5 10.25 2.5C9 2.5 8 3.5 8 4.75C8 5.73 8.63 6.56 9.5 6.87V13.13C8.63 13.44 8 14.27 8 15.25C8 16.5 9 17.5 10.25 17.5C11.5 17.5 12.5 16.5 12.5 15.25C12.5 14.32 11.94 13.5 11.13 13.18C11.41 12.5 12.23 11.5 14.75 11.5ZM10.25 14.5C10.4489 14.5 10.6397 14.579 10.7803 14.7197C10.921 14.8603 11 15.0511 11 15.25C11 15.4489 10.921 15.6397 10.7803 15.7803C10.6397 15.921 10.4489 16 10.25 16C10.0511 16 9.86032 15.921 9.71967 15.7803C9.57902 15.6397 9.5 15.4489 9.5 15.25C9.5 15.0511 9.57902 14.8603 9.71967 14.7197C9.86032 14.579 10.0511 14.5 10.25 14.5ZM10.25 4C10.4489 4 10.6397 4.07902 10.7803 4.21967C10.921 4.36032 11 4.55109 11 4.75C11 4.94891 10.921 5.13968 10.7803 5.28033C10.6397 5.42098 10.4489 5.5 10.25 5.5C10.0511 5.5 9.86032 5.42098 9.71967 5.28033C9.57902 5.13968 9.5 4.94891 9.5 4.75C9.5 4.55109 9.57902 4.36032 9.71967 4.21967C9.86032 4.07902 10.0511 4 10.25 4ZM17.75 5.5C17.9489 5.5 18.1397 5.57902 18.2803 5.71967C18.421 5.86032 18.5 6.05109 18.5 6.25C18.5 6.44891 18.421 6.63968 18.2803 6.78033C18.1397 6.92098 17.9489 7 17.75 7C17.5511 7 17.3603 6.92098 17.2197 6.78033C17.079 6.63968 17 6.44891 17 6.25C17 6.05109 17.079 5.86032 17.2197 5.71967C17.3603 5.57902 17.5511 5.5 17.75 5.5V5.5ZM16 22V24H4C3.46957 24 2.96086 23.7893 2.58579 23.4142C2.21071 23.0391 2 22.5304 2 22V6H4V22H16Z" fill="black"/>
                            </svg></span>
                            <span>Ressources</span>
                          </span>
                        </li>
                    </Link>
                    <Link to="" onClick={()=>this.handleShow('tools')}>
                        <li className="nav-links nav-links-mobile">
                          <span><span><svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5 18C14.0402 18.0013 13.5846 17.9114 13.1598 17.7355C12.7349 17.5596 12.3492 17.3011 12.025 16.975L7.89699 12.847C6.72558 13.1057 5.50542 13.0349 4.37177 12.6425C3.23812 12.2502 2.23526 11.5516 1.47434 10.6241C0.713432 9.69672 0.224194 8.5767 0.0608613 7.38824C-0.102472 6.19979 0.0664801 4.98931 0.548989 3.891L1.13699 2.551L5.29299 6.707C5.48331 6.88874 5.73634 6.99014 5.99949 6.99014C6.26264 6.99014 6.51567 6.88874 6.70599 6.707C6.799 6.61428 6.87282 6.50413 6.92321 6.38285C6.97361 6.26157 6.9996 6.13154 6.99969 6.00021C6.99978 5.86887 6.97398 5.73881 6.92375 5.61746C6.87353 5.49611 6.79987 5.38585 6.70699 5.293L2.55099 1.136L3.89099 0.548C4.9894 0.0657916 6.19987 -0.102897 7.38827 0.0606269C8.57667 0.224151 9.69659 0.713502 10.6239 1.47446C11.5513 2.23541 12.2499 3.23825 12.6422 4.37186C13.0346 5.50547 13.1055 6.72559 12.847 7.897L16.975 12.025C17.4645 12.5145 17.7979 13.1381 17.933 13.8171C18.068 14.4961 17.9987 15.1999 17.7338 15.8394C17.4689 16.479 17.0202 17.0256 16.4446 17.4102C15.869 17.7948 15.1923 18 14.5 18V18ZM8.46999 10.591L13.44 15.561C13.7255 15.8336 14.1052 15.9858 14.5 15.9858C14.8948 15.9858 15.2744 15.8336 15.56 15.561C15.6995 15.4219 15.8101 15.2566 15.8856 15.0746C15.9611 14.8926 16 14.6975 16 14.5005C16 14.3035 15.9611 14.1084 15.8856 13.9264C15.8101 13.7444 15.6995 13.5791 15.56 13.44L10.591 8.47L10.779 7.887C10.9986 7.21187 11.0553 6.49431 10.9443 5.79308C10.8333 5.09184 10.5578 4.42686 10.1404 3.85257C9.72295 3.27828 9.17546 2.81101 8.54271 2.48901C7.90996 2.16701 7.20996 1.99943 6.49999 2C6.41599 2 6.33266 2.00233 6.24999 2.007L8.12199 3.879C8.6844 4.44158 9.00035 5.20451 9.00035 6C9.00035 6.79549 8.6844 7.55842 8.12199 8.121C7.55049 8.6667 6.79068 8.97119 6.00049 8.97119C5.2103 8.97119 4.45049 8.6667 3.87899 8.121L2.00699 6.249C2.00232 6.33233 1.99999 6.416 1.99999 6.5C1.99943 7.21009 2.16704 7.91022 2.48909 8.54309C2.81114 9.17595 3.27848 9.72355 3.85286 10.1411C4.42724 10.5586 5.09233 10.8341 5.79368 10.9452C6.49504 11.0563 7.21272 10.9996 7.88799 10.78L8.46999 10.591Z" fill="black"/>
                          </svg></span>Tools<span> <i className='fab fa-get-pocket'/></span></span>
                        </li>
                    </Link>
                    <Link to="" onClick={()=>this.handleShow('settings')}>
                        <li className="nav-links nav-links-mobile">
                            <span>           
                                <span><svg className="link-icon feather feather-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  viewBox="0 0 24 24">
                                  <defs />
                                  <circle cx="12" cy="12" r="3" />
                                  <path
                                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                                </svg> </span>
                                <span >Settings</span>
                              </span>
                        </li>
                    </Link>
                    <Link to="" onClick={()=>this.handleShow('help')}>
                        <li className="nav-links help">
                         <span><span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.18 14.17V14.12C24.18 11.12 21.84 8.92 18.3 8.92C17.2164 8.90209 16.1421 9.12307 15.1535 9.56725C14.1649 10.0114 13.2862 10.6679 12.58 11.49C12.4819 11.5809 12.403 11.6906 12.3481 11.8126C12.2931 11.9345 12.2631 12.0663 12.26 12.2C12.2599 12.3234 12.2847 12.4455 12.3328 12.5591C12.3809 12.6728 12.4514 12.7755 12.54 12.8614C12.6286 12.9472 12.7336 13.0143 12.8487 13.0588C12.9638 13.1032 13.0867 13.124 13.21 13.12C13.4742 13.1134 13.7268 13.0103 13.92 12.83C14.4545 12.2037 15.1183 11.7006 15.8658 11.3553C16.6132 11.0101 17.4266 10.8309 18.25 10.83C20.61 10.83 22.08 12.35 22.08 14.24V14.29C22.08 16.5 20.32 17.73 17.54 17.94C17.4274 17.9443 17.3171 17.9724 17.2161 18.0224C17.1151 18.0723 17.0258 18.143 16.9541 18.2299C16.8824 18.3167 16.8298 18.4178 16.7998 18.5264C16.7698 18.6349 16.763 18.7486 16.78 18.86C16.78 18.86 16.78 21.18 16.78 21.61C16.8049 21.8575 16.9211 22.0869 17.106 22.2533C17.2909 22.4197 17.5312 22.5112 17.78 22.51H17.89C18.1375 22.4851 18.3669 22.3689 18.5333 22.184C18.6997 21.9991 18.7913 21.7588 18.79 21.51V19.45C21.75 19 24.18 17.45 24.18 14.17V14.17Z" fill="black"/>
                        <path d="M17.78 27.45C18.4704 27.45 19.03 26.8904 19.03 26.2C19.03 25.5096 18.4704 24.95 17.78 24.95C17.0897 24.95 16.53 25.5096 16.53 26.2C16.53 26.8904 17.0897 27.45 17.78 27.45Z" fill="black"/>
                        <path d="M33.12 12.81C32.5123 13.0884 31.8699 13.2835 31.21 13.39C32.2653 16.3944 32.2686 19.6682 31.2196 22.6747C30.1705 25.6813 28.1313 28.2424 25.436 29.9381C22.7407 31.6339 19.5494 32.3638 16.3849 32.0082C13.2205 31.6526 10.2707 30.2326 8.01907 27.9809C5.7674 25.7292 4.3474 22.7795 3.9918 19.6151C3.6362 16.4506 4.3661 13.2593 6.06186 10.564C7.75762 7.86874 10.3187 5.82947 13.3252 4.78041C16.3318 3.73135 19.6056 3.73473 22.61 4.79C22.7167 4.13017 22.9117 3.48772 23.19 2.88C19.7563 1.69271 16.0215 1.70478 12.5955 2.91424C9.16952 4.1237 6.25488 6.45908 4.32759 9.53895C2.4003 12.6188 1.57427 16.2612 1.98439 19.8711C2.39451 23.4811 4.01655 26.8453 6.5856 29.4144C9.15465 31.9834 12.5189 33.6055 16.1289 34.0156C19.7388 34.4257 23.3812 33.5997 26.461 31.6724C29.5409 29.7451 31.8763 26.8305 33.0858 23.4045C34.2952 19.9785 34.3073 16.2437 33.12 12.81V12.81Z" fill="black"/>
                        <path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="black"/>
                        </svg></span>Help!</span>                      
                        </li>
                    </Link>
                  </ul> 
                </div>

              </div>
            </div>
            {/* insertion de files component  */}
            {/* <Files/> */}
            <div className="app-tools">
              <div className="navigation__tool">
                {/* <Tool /> */}
              </div>
            </div>
          {
            this.viewComponent()
          }
          </div>

        </div>
            
        {/* <></> */}
      </main>
    </>
   )
  }
}