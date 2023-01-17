import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Prueba en useFetchGifs', () => {

    test('Debe regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))
        // console.log(result)
        const { images, isLoding } = result.current

        expect(images.length).toBe(0)
        expect(isLoding).toBeTruthy()


    })

    test('Debe regresar un arreglo de imagenes y el isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)

        )

        const { images, isLoding } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoding).toBeFalsy()


    })



})