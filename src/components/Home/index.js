import { Component } from "react";
import Header from '../Header'
import JourneySection from '../JourneySection'
import { FaCircleInfo } from "react-icons/fa6";
import './index.css'

const task = {
  task_id: 18882,
  task_title: "Explore the world of management",
  task_description: "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
  status: "notworkyet",
  assets: [
    {
      asset_id: 18883,
      asset_title: "Technical Project Management",
      asset_description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
      asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
      asset_type: "display_asset",
      asset_content_type: "video"
    },
    {
      asset_id: 18884,
      asset_title: "Threadbuild",
      asset_description: "Watch the video and thread build, and jot out key threads while watching that video.",
      asset_content: "",
      asset_type: "input_asset",
      asset_content_type: "threadbuilder"
    },
    {
      asset_id: 18885,
      asset_title: "Structure you pointers",
      asset_description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
      asset_content: "",
      asset_type: "input_asset",
      asset_content_type: "StructureYouPointersarticle"
    },
    {
      asset_id: 18886,
      asset_title: "4SA Method",
      asset_description: "To explore more read more",
      asset_content: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
      asset_type: "display_asset",
      asset_content_type: "fsaMethodArticle"
    }
  ]
};

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <JourneySection />
          
          <div className="tech-proj-management">
      <div className="tech-proj-container">
        <h1 className="tech-proj-heading">{task.assets[0].asset_title}</h1>
        <button className="submit-btn">Submit task</button>
      </div>
      <div className="description-container">
        <h1 className="description-heading">{task.task_title}</h1>
        <p className="description-para">{task.task_description}</p>
      </div>
      <ul className="assets-container">
        {task.assets.map((asset, index) => (
          <li className="asset-item-container" key={asset.asset_id}>
            <div className="asset-title-container">
              <h1 className="asset-title">{asset.asset_title}</h1>
              <FaCircleInfo className="info-icon" />
            </div>
            <div className="asset-description">
              <p className="asset-desc-para">
                <span className="asset-desc-heading">Description: </span>
                {asset.asset_description}
              </p>
            </div>
            {asset.asset_content_type === "video" ? (
              <iframe
                width="480"
                height="291"
                id="embedded-video"
                src={asset.asset_content}
                title={asset.asset_title}
              />
            ) : asset.asset_content_type === "threadbuilder" ? (
              <div className="asset-content">
              <div className="theard-name-container">
                &nbsp;&nbsp;&nbsp; <svg width="17" height="10" viewBox="0 0 17 10" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0593 9.59961L8.94793 3.66593L2.8366 9.59961L0.958984 7.77285L8.94793 -0.000391006L16.9369 7.77285L15.0593 9.59961Z" fill="black" />
                  <path d="M8.9131 3.63006L8.94793 3.59624L8.98276 3.63006L15.0592 9.52988L16.8652 7.77285L8.94793 0.0693722L1.03068 7.77285L2.83663 9.52988L8.9131 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
                </svg>
                <h1 className="thread-heading">Thread-A</h1>
              </div>
              <div className="sub-threads-container">
                <div className="sub-thread">
                  <h1 className="sub-thread-heading">&nbsp; &nbsp;Sub thread 1</h1>

                  <input type="text" className="text-area-container" placeholder="Enter Text here" />
                </div>
                <div className="sub-thread">
                  <h1 className="sub-thread-heading">&nbsp; &nbsp;Sub Interpretation 1</h1>

                  <input type="text" className="text-area-container" placeholder="Enter Text here" />
                </div>
              </div>
              <div className="options-container">
                <ul className="options-imgs-container">
                  <li className="option-list-item">
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z" fill="#323232" />
                    </svg>
                  </li>
                  <li className="option-list-item">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.7727 2C21.7727 0.9 20.8382 0 19.6832 0H2.8832C1.7282 0 0.783203 0.9 0.783203 2V14C0.783203 15.1 1.7282 16 2.8832 16H17.5832L21.7832 20L21.7727 2ZM17.5832 12H4.9832V10H17.5832V12ZM17.5832 9H4.9832V7H17.5832V9ZM17.5832 6H4.9832V4H17.5832V6Z" fill="#323232" />
                    </svg>
                  </li>
                  <li className="option-list-item">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.4499 0H3.11654C1.82154 0 0.783203 0.857143 0.783203 1.90476V15.2381C0.783203 16.2857 1.82154 17.1429 3.11654 17.1429H7.7832L11.2832 20L14.7832 17.1429H19.4499C20.7332 17.1429 21.7832 16.2857 21.7832 15.2381V1.90476C21.7832 0.857143 20.7332 0 19.4499 0ZM12.4499 15.2381H10.1165V13.3333H12.4499V15.2381ZM14.8649 7.85714L13.8148 8.73338C12.9748 9.42861 12.4499 10 12.4499 11.4286H10.1165V10.9524C10.1165 9.90476 10.6414 8.95242 11.4814 8.25718L12.9281 7.05718C13.3598 6.71432 13.6165 6.2381 13.6165 5.71429C13.6165 4.66667 12.5665 3.80952 11.2832 3.80952C9.99987 3.80952 8.94987 4.66667 8.94987 5.71429H6.61654C6.61654 3.60952 8.70487 1.90476 11.2832 1.90476C13.8615 1.90476 15.9499 3.60952 15.9499 5.71429C15.9499 6.55238 15.5299 7.31429 14.8649 7.85714Z" fill="#323232" />
                    </svg>
                  </li>
                  <li className="option-list-item">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4044 6.867C13.236 4.356 12.1786 1.908 10.1952 0C8.19305 1.926 7.08879 4.374 6.87361 6.867C8.07115 7.479 9.17535 8.27101 10.139 9.23401C11.1026 8.28001 12.2069 7.488 13.4044 6.867ZM7.32312 9.25203C7.19214 9.16203 7.04227 9.08099 6.90193 8.99099C7.04227 9.08999 7.19214 9.16203 7.32312 9.25203ZM13.3295 9.02703C13.2078 9.10803 13.0765 9.17103 12.9549 9.26103C13.0765 9.17103 13.2078 9.10803 13.3295 9.02703ZM10.139 12.105C8.1275 9.15296 4.69393 7.2 0.783203 7.2C0.783203 11.988 3.92655 16.038 8.29571 17.541C8.88512 17.748 9.50281 17.901 10.139 18C10.7752 17.892 11.3835 17.739 11.9823 17.541C16.3515 16.038 19.4948 11.988 19.4948 7.2C15.5841 7.2 12.1505 9.15296 10.139 12.105Z" fill="#323232" />
                    </svg>
                  </li>
                </ul>
                <div className="select-options-container">
                  <div className="select-option">
                    <p className="select-option-text">Select Categ  &nbsp;
                      <svg width="11" height="6" viewBox="0 0 11 6" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.98839 0L5.09265 3.63287L1.1969 0L0 1.11842L5.09265 5.87756L10.1853 1.11842L8.98839 0Z" fill="black" />
                      </svg></p>
                  </div>
                  <div className="select-option">
                    <p className="select-option-text">Select Categ  &nbsp;
                      <svg width="11" height="6" viewBox="0 0 11 6" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.98839 0L5.09265 3.63287L1.1969 0L0 1.11842L5.09265 5.87756L10.1853 1.11842L8.98839 0Z" fill="black" />
                      </svg></p>
                  </div>
                </div>
              </div>
              <div className="thread-button-add">
                <button className="sub-thread-button">&nbsp; <span style={{ fontSize: "20px" }}>+</span> &nbsp; Sub-thread</button>
              </div><div className="summary-thread">
                <h1 className="summary-thread-heading">Summary for Thread A</h1>
                <input type="text" className="summary-text-area-container" placeholder="Enter Text here" />
              </div>
            </div>
            ) : asset.asset_content_type === "StructureYouPointersarticle" ? (
              
              <div className="structure-ur-content">
              <h1 className="structure-ur-heading">Title</h1>
              <div className="structure-ur-titile-container">

              </div>
              <h1 className="structure-ur-heading">Content</h1>

              <div className="structure-ur-content-top">
                <ul className="tools-names-container">
                  <li className="tool-name">File</li>
                  <li className="tool-name"> View</li>
                  <li className="tool-name">Insert</li>
                  <li className="tool-name">Format</li>
                  <li className="tool-name">Tools</li>
                  <li className="tool-name">Table</li>
                  <li className="tool-name">Help</li>
                </ul>
                <ul className="tools-svg-container">
                  <li className="tool-svg-img">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.79978 3.1501L3.15002 7.13561M3.15002 7.13561L7.79978 11.1211M3.15002 7.13561L13.85 7.13561C16.0592 7.13561 17.85 8.92647 17.85 11.1356V14.8501" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </li>
                  <li className="tool-svg-img">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9431 3.32505L16.15 7.53197M16.15 7.53197L11.9431 11.7389M16.15 7.53197H6.85003C4.64089 7.53197 2.85003 9.32284 2.85003 11.532V15.675" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </li>
                  <li className="tool-svg-img">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </li>
                  <li className="tool-svg-para">Paragraph</li>
                  <li className="tool-svg-img-dots-container">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
                    </svg>
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
                    </svg>
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#616161" />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="structure-ur-content-bottom">

              </div>

            </div>
            ) : asset.asset_content_type === "fsaMethodArticle" ?(
              <div className="fsa-asset-content-container">
                    <div className="fsa-theard-name-container">
                      &nbsp;&nbsp;&nbsp; <svg width="17" height="10" viewBox="0 0 17 10" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0593 9.59961L8.94793 3.66593L2.8366 9.59961L0.958984 7.77285L8.94793 -0.000391006L16.9369 7.77285L15.0593 9.59961Z" fill="black" />
                        <path d="M8.9131 3.63006L8.94793 3.59624L8.98276 3.63006L15.0592 9.52988L16.8652 7.77285L8.94793 0.0693722L1.03068 7.77285L2.83663 9.52988L8.9131 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
                      </svg>&nbsp;&nbsp;
                      <h1 className="fsa-thread-heading">Introduction</h1>
                    </div>
                    <p className="fsa-intro-para">The 4SA Method , How to bring a idea into progress ?</p>
                    <div className="seemore-container">
                      <p className="see-more-text">See More</p>
                    </div>
                    <div className="fsa-theard-name-container">
                      &nbsp;&nbsp;&nbsp; <svg width="17" height="10" viewBox="0 0 17 10" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0593 9.59961L8.94793 3.66593L2.8366 9.59961L0.958984 7.77285L8.94793 -0.000391006L16.9369 7.77285L15.0593 9.59961Z" fill="black" />
                        <path d="M8.9131 3.63006L8.94793 3.59624L8.98276 3.63006L15.0592 9.52988L16.8652 7.77285L8.94793 0.0693722L1.03068 7.77285L2.83663 9.52988L8.9131 3.63006Z" stroke="black" stroke-opacity="0.4" stroke-width="0.1" />
                      </svg>&nbsp;&nbsp;
                      <h1 className="fsa-thread-heading">Thread-A</h1>
                    </div>
                    <p className="fsa-thread-discription">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                    <div className="seemore-container">
                      <p className="see-more-text">See More</p>
                    </div>

                    <div className="fsa-example-container">
                      <h1 className="fsa-thread-heading">&nbsp;&nbsp;&nbsp;Example 1</h1>
                    </div>
                    <p className="fsa-ex-disc">You have a concept , How will you put into progress?</p>
                  </div>

            ):null}
          </li>
        ))}
      </ul>
            </div>
            <div className="notice-board-icons-container">
              <div className="notice-board-container">
                <div className="notice-board">
                  <p className="notice-discr">&nbsp;  &#x2715; Notice     Board</p>
                </div>
              </div>
              <div className="icons-container">
                <div className="home-icon-container">
                  <img src="https://s3-alpha-sig.figma.com/img/5b31/c50e/1a61e9875a4e31e0b5da40fe87694dd9?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQmk1KOXI~XnfOqOG0raJzJWNUoWyMpNzaJdrPevkiU-Xs6ZflmcvyaTqLFFzfmR569YIXIyIuvzooRH9O91hcoGYi70eorBV5O3~P-mNxXheoc0muiIz4gUbeMKcYc3aIMbSlZ2bk41BHbqaXNdHwAG2s0pHup7Uyx2ORn7qWYA7vROm8YJ5SiTXoiWrV8Umc3DVKd8pwHBHMpLZDhPZn~ZDyc6zgGbLUpS7B9MVx7amXQTXmmYBqMQQnAKlnskOzlo0EbHDB0aJgrXzKL60uH9ByC~lRpoUcjesBFIX-3PauRv9XgVFVjW8RvZPtQ99IchZWJsQQm7P3kOdy8oVg"
                    className="home-icon-img"
                    alt="question-icon" />
                </div>
                <div className="home-icon-container">
                  <img src="https://s3-alpha-sig.figma.com/img/22ae/6e6c/9b8abad7a9c8d241fd0ab9eb6a9f95b5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y9z6cofWyj1L8sHUi~et5Irght7uR9TBKspQVQpbG21izmulGHpse8UD7hM8B~Ch4YDoSFfAUhTJA0X0PBufwWq~19RNYOOVrsTmC1DkmJAJ70dLKrCpVMPdbZ1gF07O3l-QcIdDa5FW~rxxsRoqp1Jm4CjvJOL4n1n~3zbsS5cPuiVXfAjJvpuY~u3RFXcKu5~-1BZuqvs6rT1qlZWKVauBDomwhpsMxVNNLZZ8geKb71xvq1NCFU7a4AIlzA1RLG1FV5fbEy8we4JX~4cvb2ywEO-gMBUYNNrDRkP64Ew-ALIvXVIYZJuTLF3YQmJ64tTbmajtF408mQHsJ83DdQ"
                    className="home-icon-img"
                    alt="meeting-icon" />
                </div>
                <div className="home-icon-container">
                  <img src="https://s3-alpha-sig.figma.com/img/1438/def8/3870fdb52d83bb903bb6574487be8860?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o086ymQsa~Eq1kpaSNFSlWnOA9DYfgHVyhSjhbzfYZ-dossPkPUmK2hK7PVZ3UFN7qviytO13PpzAjQ55EDWzKFlYAySe5LHQziLvqbJ9qTf5gHZ00BVGtcEp1eBoCGYtjTYy7rDy4~mCKQBrtX9OjmoAesIOWVFFutpAlg0OOBmQq0U36WMMHRpcqptdGLiYNjhxUmiO3A4upGorNvsmnylb~AaGxgEvt6vEpisuDVMiybqWTZlpPdIZT614Gm-a7VTrewSiwnYyNWul8ZtHPNZXnEOs89ORM-wjSqQjHsOHhUfQ0zwvpfyZfjklmJ829pFfqWwZ-XzXlGOls50EA"
                    className="home-icon-img"
                    alt="schdule-icon" />
                </div>
              </div>
            </div>
         
        </div>

      </>

    )
  }
}

export default Home
