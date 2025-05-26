// import { useDispatch, useSelector } from "react-redux"
import leftArrow from "./img/arrowLeft.png"
import rightArrow from "./img/arrowRight.png"
import "./index.scss"
// import { getTotal, getNextLink, getPrevLink } from "../../store/pokemons/selectors"
// import { AppDispatch } from "../../store"
// import { getPokemonsThunk } from "../../store/pokemons/slice"
import { FC } from "react"
import { useGetPokemonsQuery } from "../../api/pokemons"

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  url: string;
};

export const Pagination: FC<PaginationProps> = ({ page, setPage, url }) => {
  // const dispatch: AppDispatch = useDispatch();

  const { data } = useGetPokemonsQuery(url);
  console.log(data)

  const total = data?.count;
  // const nextLink = useSelector(getNextLink);
  // const prevLink = useSelector(getPrevLink);
  const pages =
    total !== undefined
      ? Array.from({ length: Math.ceil(total / 20) }, (_, i) => i + 1)
      : [];

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="pagination">
      <button className="pagination__arrow" disabled={data?.previous ? false : true} onClick={handlePrevPage}>
        <img src={leftArrow} alt="" className="left-arrow" />
      </button>
      <div className="pagination__middle">
        {pages.map((item: number, i: number) => {
          return <button className={`page-num ${page === item ? 'page-num_active' : ''}`} key={i}>{item}</button>
        })}
      </div>
      <button className="pagination__arrow" disabled={data?.next ? false : true} onClick={handleNextPage}>
        <img src={rightArrow} alt="" className="right-arrow" />
      </button>
    </div>
  )
}