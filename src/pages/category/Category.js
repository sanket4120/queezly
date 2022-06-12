import { useEffect } from 'react';
import { getCategories } from '../../actions/categoryActions';
import CategoryCard from '../../components/cards/CategoryCard';
import Loader from '../../components/loader/Loader';
import { useCategory } from '../../context/categoryContext';

const Category = () => {
  const {
    categoryState: { loading, categories },
    setCategory,
  } = useCategory();

  useEffect(() => {
    getCategories(setCategory);
  }, [setCategory]);

  return (
    <>
      {loading && <Loader />}
      {!loading && categories && (
        <main className='txt-center py-6'>
          <h1 className='mb-5 size-2'>Select Category</h1>
          <section className='grid gap-2'>
            {categories.map((category) => (
              <div
                className='col-6 col-md-4 col-lg-3 flex flex-column'
                key={category.id}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default Category;
