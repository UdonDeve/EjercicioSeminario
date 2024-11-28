'use client';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { supabase } from '../lib/supabaseClient'; 

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [cartItems, setCartItems] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isEditMode, setIsEditMode] = useState(false);
  const [newProduct, setNewProduct] = useState({ id: '', name: '', description: '', image_url: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*');
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        console.log('Products fetched:', data); 
        setProducts(data);  
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            name: product.name,
            description: product.description,
            image_url: product.image_url,
          },
        ]);

      if (error) {
        console.error('Error adding product to cart:', error);
      } else {
        console.log('Product added to cart:', data);
        if (data && data.length > 0) {
          setCartItems([...cartItems, data[0]]);
          setProducts(products.filter((p) => p.id !== product.id));
        } else {
          console.warn('No product added, `data` is empty or null.');
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    setProducts([...products, product]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsEditMode(false);
    setNewProduct({ name: '', description: '', image_url: '' });
  };

  const handleEditProduct = (product) => {
    setIsModalOpen(true);
    setIsEditMode(true);
    setNewProduct({
      id: product.id,
      name: product.name,
      description: product.description,
      image_url: product.image_url,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, image_url } = newProduct;
  
    if (isEditMode) {
      const { data, error } = await supabase
        .from('products')
        .update([{ name, description, image_url }])
        .eq('id', newProduct.id);
  
      if (error) {
        console.error('Error updating product:', error);
      } else {
        console.log('Product updated:', data);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === newProduct.id ? { ...product, name, description, image_url } : product
          )
        );
        setIsModalOpen(false);
      }
    } else {
      const { data, error } = await supabase
        .from('products')
        .insert([{ name, description, image_url }]);
  
      if (error) {
        console.error('Error adding product:', error);
      } else {
        console.log('Producto añadido:', data); 
        if (data && Array.isArray(data) && data.length > 0) {
   
          setProducts((prevProducts) => [...prevProducts, data[0]]);
        } else {
          console.warn('No se añadió ningún producto, `data` está vacío o nulo.');
        } 
        setIsModalOpen(false);
      }
    }
  };

  const handleDelete = async (productId) => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', productId);

    if (error) {
      console.error('Error deleting product:', error);
    } else {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      console.log('Product deleted');
    }
  };

  return (
    <div className="p-6 rounded-lg">
      <div className="w-full mb-4 flex justify-between">
        <button>
          <AccountCircleIcon style={{ fontSize: 30 }} />
        </button>
        <button onClick={handleOpenModal}>
          <ShoppingCartIcon style={{ fontSize: 30 }} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image_url || 'https://via.placeholder.com/150'}
              alt={product.name || "Unnamed Product"}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name || 'Unnamed Product'}</h3>
              <p className="text-gray-500">{product.description || 'No description available.'}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Agregar
              </button>
              <button
                onClick={() => handleEditProduct(product)}
                className="mt-4 ml-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">{isEditMode ? 'Editar Producto' : 'Nuevo Producto'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProduct.description}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
                  URL de la Imagen
                </label>
                <input
                  type="text"
                  id="image_url"
                  name="image_url"
                  value={newProduct.image_url}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded"
                >
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                  {isEditMode ? 'Guardar' : 'Agregar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
