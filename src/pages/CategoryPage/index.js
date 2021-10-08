import { useState } from 'react';
import ListCategory from '../../components/ListCategory';
import NavBar from '../../components/NavBar';

function CategoryPage() {
  const [state] = useState([
    {'name': 'smoke'},
    {'name': 'gym'},
    {'name': 'walk'}
  ])

  return (
    <div>
      <NavBar />
      <ListCategory categoryList={state} />
    </div>
  );
}

export default CategoryPage;
