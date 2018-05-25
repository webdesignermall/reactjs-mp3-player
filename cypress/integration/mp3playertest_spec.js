function add(a,b) {
	return a+b
}

describe('Hook',function(){
	before(function(){
		alert('hello');
	})
});

describe('MP3 Player Test',()=>{
	context('math', function() {
		it('Macbook 15',()=>{
			cy.viewport('macbook-15')
			cy.visit('http://localhost:3000/')
			expect(4+8).to.equal(12)
			cy.contains('She Keeps Me Rockin').click()
			cy.get('.pause-button')
			expect(add(3,4)).to.eq(7)
		});
		it.only('Smartphone',()=>{
			cy.viewport(700,1000)
			cy.visit('http://localhost:3000/')
			//cy.contains('She Keeps Me Rockin').click()
		});
	});
});
