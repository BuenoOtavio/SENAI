delimiter //

CREATE TRIGGER atualiza_valor_pedido
AFTER INSERT ON Itens_Pedido
FOR EACH ROW
BEGIN
    DECLARE novo_valor DECIMAL(8,2);
    
    SELECT SUM(valor * quantidade)
    INTO novo_valor
    FROM Itens_Pedido
    WHERE pedido_id = NEW.pedido_id;

    UPDATE Pedidos
    SET valor = novo_valor
    WHERE pedido_id = NEW.pedido_id;
END //

delimiter ;
