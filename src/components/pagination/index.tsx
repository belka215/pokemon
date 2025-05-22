import { useDispatch, useSelector } from "react-redux"
import leftArrow from "./img/arrowLeft.png"
import rightArrow from "./img/arrowRight.png"
import "./index.scss"
import { getTotal, getNextLink, getPrevLink } from "../../store/pokemons/selectors"
import { AppDispatch } from "../../store"
import { getPokemonsThunk } from "../../store/pokemons/slice"
import { useState } from "react"

export const Pagination = () => {
  const dispatch: AppDispatch = useDispatch();

  const [page, setPage] = useState(1);

  const total = useSelector(getTotal);
  const nextLink = useSelector(getNextLink);
  const prevLink = useSelector(getPrevLink);

  const pages = Array.from({ length: Math.ceil(total / 20) }, (_, i) => i + 1);

  const handlePrevPage = (URL: string | null) => {
    if (URL) {
      dispatch(getPokemonsThunk(URL))
      setPage((prevPage) => prevPage - 1);
    }
  }

  const handleNextPage = (URL: string | null) => {
    if (URL) {
      dispatch(getPokemonsThunk(URL))
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <div className="pagination">
      <button className="pagination__arrow" disabled={prevLink ? false : true} onClick={() => handlePrevPage(prevLink)}>
        <img src={leftArrow} alt="" className="left-arrow" />
      </button>
      <div className="pagination__middle">
        {pages.map((item: number, i: number) => {
          return <button className={`page-num ${page === item ? 'page-num_active' : ''}`} key={i}>{item}</button>
        })}
      </div>
      <button className="pagination__arrow" disabled={nextLink ? false : true} onClick={() => handleNextPage(nextLink)}>
        <img src={rightArrow} alt="" className="right-arrow" />
      </button>
    </div>
  )
}