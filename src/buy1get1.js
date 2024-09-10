import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

const products = [
  {
    id: 1,
    title: 'Eucerin Pro Acne Solution Anti-Acne Mark 40 Ml Free 3X Treatment Gel To Foam 75Ml',
    description: 'ราคา 1,080 THB',
    imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2024/7/26/53abacde-35ad-4460-bd01-a8de513fd9cc_thumb.jpg',
  },
  {
    id: 2,
    title: 'Srichand Sunlution Acne Care Sunscreen Spf50+ Pa++++ 40Ml',
    description: 'ราคา 299 THB',
    imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/4/7/7436ff12-36e3-4f88-86e2-ce42a6d3b727_thumb.jpg',
  },
  {
    id: 3,
    title: 'Eucerin Sun Hydro Protect Ultra Light Fluid Spf50+ 50Ml Free Spotless Brightening Foam 150G',
    description: 'ราคา 1,200 THB',
    imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2024/7/26/e97070a9-2a2a-4297-b49c-1a5901497677_large.jpg',
  },
  {
  id: 4,
  title: 'Srichand Sunlution Skin Whitening Sunscreen Spf50+ Pa++++ 40Ml',
  description: 'ราคา 299 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/4/7/6a3c79af-2d64-4a47-80da-472b14da37c2_large.jpg',
},
{
  id: 5,
  title: 'Mentholatum Acnes Sealing Jell Acne Treatment Gel 18G',
  description: 'ราคา 169 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/3/23/28503bb6-b78f-4a31-94e1-660718947ded_large.jpg',
},
{
  id: 6,
  title: 'Mentholatum Therapy Lip Balm Spf15 35G Twin Pack',
  description: 'ราคา 210 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/11/3/93de79e2-03c0-41c4-8452-7ed06b2f3817_large.jpg',
},
{
  id: 7,
  title: 'Anua-Heartleaf 77% Soothing Toner 250ML',
  description: 'ราคา 690 THB',
  imageUrl: 'https://media.multybeauty.com/v1/file/qjldrm1713414806137.png',
},
{
  id: 8,
  title: 'Physiogel Ai Mask Pack Exclusive',
  description: 'ราคา 299 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2022/11/10/0cb834a7-3d0e-49e0-adcd-0c82cd770c60_thumb.jpg',
},
{
  id: 9,
  title: 'Lululun Face Mask Pink 7 days',
  description: 'ราคา195 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/7/21/7433d683-b57c-4374-929b-16aa312062e9_large.jpg',
},
{
  id: 10,
  title: 'Rojukiss Perfect Texture 10X Intensive Mask 24Ml',
  description: 'ราคา 89 THB',
  imageUrl: 'https://thmappbkk.blob.core.windows.net/boots/2023/7/13/d26dc6d0-5751-4e8a-83d5-48ef93992527_large.jpg',
},
 
];

function Buy1Get1() {
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

export default Buy1Get1;
