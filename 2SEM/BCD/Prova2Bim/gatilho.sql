DELIMITER //

CREATE TRIGGER aluguel_update
BEFORE UPDATE ON Aluguel
FOR EACH ROW
BEGIN
    DECLARE aluguel_diaria DECIMAL(10,2);
    DECLARE aluguel_subtotal DECIMAL(10,2);

    DECLARE v_subtotal decimal(10, 2);

    select sum(datediff(new.devolucao, new.retirada) * v.diaria)
    into v_subtotal
    from Veiculo v 
    where v.placa = new.placa;

    set new.subtotal = v_subtotal;
END //

DELIMITER ;
