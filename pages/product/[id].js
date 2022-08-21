import React from 'react';
import { useRouter } from 'next/router';

const productItem = () => {
    const router = useRouter()

  return (
    <div> Esta es la pagina de productos de pruebas: {router.query.id}</div>
  )
}

export default productItem