DELIMITER //
CREATE PROCEDURE atualiza_valores()
BEGIN
    DECLARE total_pedido DECIMAL(8,2);
    
    DECLARE done INT DEFAULT FALSE;
    DECLARE cur_pedido CURSOR FOR SELECT pedido_id FROM Pedidos;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    OPEN cur_pedido;
    read_loop: LOOP
        FETCH cur_pedido INTO pedido_id;
        IF done THEN
            LEAVE read_loop;
        END IF;
        
        SET total_pedido = 0;
        
        SELECT SUM(valor) INTO total_pedido
        FROM Itens_Pedido
        WHERE pedido_id = pedido_id;
        
        UPDATE Pedidos SET valor = total_pedido WHERE pedido_id = pedido_id;
    END LOOP;
    
    CLOSE cur_pedido;
    
END //
DELIMITER ;

CALL atualiza_valores();
