DELIMITER //

CREATE PROCEDURE calcSubtotais()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE aluguel_id INT;
    DECLARE aluguel_placa VARCHAR(8);
    DECLARE aluguel_retirada DATE;
    DECLARE aluguel_devolucao DATE;
    DECLARE aluguel_subtotal DECIMAL(10,2);
    DECLARE aluguel_diaria DECIMAL(10,2);

    DECLARE cur CURSOR FOR
        SELECT id, placa, retirada, devolucao FROM Aluguel;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO aluguel_id, aluguel_placa, aluguel_retirada, aluguel_devolucao;
        IF done THEN
            LEAVE read_loop;
        END IF;

        IF aluguel_devolucao IS NOT NULL THEN
            SELECT diaria INTO aluguel_diaria FROM Veiculo WHERE placa = aluguel_placa;
            SET aluguel_subtotal = DATEDIFF(aluguel_devolucao, aluguel_retirada) * aluguel_diaria;
            UPDATE Aluguel SET subtotal = aluguel_subtotal WHERE id = aluguel_id;
        END IF;
    END LOOP;

    CLOSE cur;
END //

DELIMITER ;
