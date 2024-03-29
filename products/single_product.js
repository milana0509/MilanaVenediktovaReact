import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import styled from 'styled-components'
import data from '../../products/products.json'

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: space-between;
  align-items: stretch;
`

const Image = styled.img`
  width: 400px;
  object-fit: cover;
`

const Span = styled.span`
  font-weight: bold;
`

const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 20px;
`
const Text = styled.p`
  margin-top: 20px;
`

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const SingleProduct = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const getProduct = () => {
    setLoading(true)
    const targetProduct = data.products.find((product) => product.id === parseInt(id))
    setProduct(targetProduct)
    setLoading(false)
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (!product) {
    return <Redirect to='/error' />
  }

  const addToCart = () => {
    product.list = 'cart'
    add(cartItems, product)
  }

  //  TODO: add a section for size
  const { title, image, size, price } = product

  return (
    <>
      <Title text={title} />
      <Content>
        <Image src={image} alt={title} />
        <div>
          <Subtitle>
            <Span>Izmērs: </Span>
            {size}
          </Subtitle>
          <Subtitle>
            <Span>Cena: </Span>
            {price}
          </Subtitle>
          {/* TODO: update description, from files */}
          <Text>Auduma soma ar rokām darinātu rakstu. Materiāls: kokvilns. Krāsa: balts.</Text>
          <Wrapper>
            <PrimaryButton text='Add to card' clickEvent={addToCart} darkbg />
          </Wrapper>
        </div>
      </Content>
      <ToastContainer />
    </>
  )
}

export default SingleProduct
