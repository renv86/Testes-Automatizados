import multiplicacao from "./multiplicacao";

describe('Teste de multiplicacão', () => {
    test('deve verificar o resultado de uma multiplicacão', () =>{
        expect(multiplicacao(6.5, 2)) .toBeCloseTo(13)
        expect(multiplicacao(2, 8)) .toBeCloseTo(16)
        expect(multiplicacao(60, 2)) .toBeCloseTo(120)
    })
    test('deve verificar o resultado incorreto de uma multiplicacão', () =>{
        expect(multiplicacao(6, 2)).not .toBeCloseTo(20)
        
    })
})
