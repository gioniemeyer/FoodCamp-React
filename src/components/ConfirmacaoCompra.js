export default function ConfirmacaoCompra() {
    return (
        <div class="confirmation hidden">
            <p><strong>Confirme seu pedido</strong></p>
            <div class="items-confirm meal-confirm">
                <p class="Name-Meal">teste</p>
                <p class="Price-Meal">teste</p>
            </div>

            <div class="items-confirm meal-confirm">
                <p class="Name-Meal">teste</p>
                <p class="Price-Meal">teste</p>
            </div>

            <div class="items-confirm meal-confirm">
                <p class="Name-Meal">teste</p>
                <p class="Price-Meal">teste</p>
            </div>
            
            <div class="items-confirm meal-confirm">
                <p>TOTAL</p>
                <p class="Price-Meal">teste</p>
            </div>

            <button class = "confirmed">Tudo certo, pode pedir!</button>
            <a href="https://gioniemeyer.github.io/Projeto_FoodCamp/">Cancelar</a>

            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </div>
    )
}