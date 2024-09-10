import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

const products = [
  {
    id: 1,
    title: 'Beauty Of Joseon Relief Sun Spf50+ Pa++++ 50 Ml.',
    description: 'ราคา 549 THB',
    imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2024/7/4/2c715ec4-484b-493e-9fc6-0293c76403b1_thumb.jpg',
  },
  {
    id: 2,
    title: 'Skintific Mugwort Ance Clay Mask Stick 40 g.',
    description: 'ราคา 340 THB',
    imageUrl: 'https://medias.watsons.co.th/publishing/WTCTH-307778-front-zoom.jpg',
  },
  {
    id: 3,
    title: 'Romnd Better Than Palette 7.5g. 01 Pampas Garden',
    description: 'ราคา 750 THB',
    imageUrl: 'https://medias.watsons.co.th/publishing/WTCTH-312698-front-zoom.jpg?version=1723577426',
  },
  {
  id: 4,
  title: 'Biodermasensibio H2O 500Ml',
  description: 'ราคา 995 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/10/26/670b0699-d0c0-49c8-a434-107a2d8ce0fb_large.jpg',
},
{
  id: 5,
  title: 'Anessa Perfect Uv Sunscreen Mild Milk Na Spf 50+ Pa++++ 60Ml',
  description: 'ราคา 1050 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2024/2/22/0a762528-3366-4bc7-8699-c32f0e488eb0_large.jpg',
},
{
  id: 6,
  title: 'CERAVE Facial Moisturizing Lotion 52 ml',
  description: 'ราคา 655 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/1/9/952d2575-9393-4580-af49-0f73143497e1_thumb.jpg',
},
{
  id: 7,
  title: 'Cetaphil Hydrating Foaming Cream Cleanser 473Ml',
  description: 'ราคา 700 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/5/4/c38c02de-3e8d-4617-a6c7-c67fe1944b10_large.jpg',
},
{
  id: 8,
  title: 'Beauty Of Joseon Ginseng Essence Water 150 Ml.',
  description: 'ราคา 690 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2024/7/4/18b1653e-f697-401c-a66f-1527728ac96d_large.jpg',
},
{
  id: 9,
  title: 'Laroche Posay Effaclar Micro Peeling gel size 400 ml.',
  description: 'ราคา 1,080 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/1/9/7559d991-8b74-49ef-ada6-b127d190d6f2_large.jpg',
},
{
  id: 10,
  title: 'Romnd Glasting Melting Lip Balm 3.5g. 01 Coco Nude',
  description: 'ราคา 350 THB',
  imageUrl: 'https://medias.watsons.co.th/publishing/WTCTH-308654-front-zoom.jpg',
},
{
  id: 11,
  title: 'Laroche Posay Cicaplast Baume B5 Plus 100 ml. Ultra Repairing Soothing Balm',
  description: 'ราคา 850 THB',
  imageUrl: 'https://medias.watsons.co.th/publishing/WTCTH-303150-front-zoom.jpg',
},
{
  id: 12,
  title: 'Innisfree green tea seed hyaluronic serum 80 ml.',
  description: 'ราคา 1,100 THB',
  imageUrl: 'https://th.innisfree.com/cdn/shop/files/THUMBNAIL_COVER_GTSS.jpg?v=1724040861',
},

];

function Bestseller() {
  return (
    <div className="card-container">
      {products.map((product) => (
        <Card key={product.id} className="card-item">
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Bestseller;

