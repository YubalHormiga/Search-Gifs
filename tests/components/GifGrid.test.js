import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('PruebaS en <GifGrid />', () => {

    const category = 'One Punch'

    test('Debe de mostrar  el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoding: true
        })

        render(<GifGrid category={category} />)
        // screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('Debe de mostrar items cuando se cargan las imágenes de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'PruebaTitle',
                url: 'https://gifs.com'
            },
            {
                id: '123',
                title: 'PruebaTitle1',
                url: 'https://gifsmax.com'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoding: true
        })

        render(<GifGrid category={category} />)

        expect( screen.getAllByRole('img').length ).toBe(2)
    })
})