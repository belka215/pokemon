import leftArrow from "./img/arrowLeft.png"
import rightArrow from "./img/arrowRight.png"
import "./index.scss"

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__arrow">
        <img src={leftArrow} alt="" className="left-arrow" />
      </div>
      <div className="pagination__middle">
        <p className="page-num">1</p>
      </div>
      <div className="pagination__arrow">
        <img src={rightArrow} alt="" className="right-arrow" />
      </div>
    </div>
  )
}