DELIMITER //
CREATE FUNCTION formatar_dinheiro(valor DECIMAL(8,2))
RETURNS VARCHAR(20)
BEGIN
    DECLARE valor_formatado VARCHAR(20);
    SET valor_formatado = CONCAT('R$ ', FORMAT(valor, 2, 'pt_BR'));
    RETURN valor_formatado;
END //
DELIMITER ;

CREATE VIEW Pedidos_Formatados AS
SELECT
    pedido_id,
    cliente_id,
    data,
    hora,
    formatar_dinheiro(valor) AS valor
FROM
    Pedidos;
