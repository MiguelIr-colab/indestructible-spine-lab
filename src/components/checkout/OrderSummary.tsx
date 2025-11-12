import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface Product {
  name: string;
  duration: string;
  price: number;
  priceFormatted: string;
}

interface OrderSummaryProps {
  product: Product;
  paymentIntentId: string;
}

const OrderSummary = ({ product, paymentIntentId }: OrderSummaryProps) => {
  const { toast } = useToast();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [couponError, setCouponError] = useState("");

  const subtotal = product.price;
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = async () => {
    const normalizedCode = couponCode.trim().toUpperCase();
    
    if (!normalizedCode) {
      setCouponError("Por favor, introduce un código de cupón");
      return;
    }

    setIsApplying(true);
    setCouponError("");

    try {
      const response = await fetch("https://www.aquiiraelbackend.com/apply-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentIntentId,
          couponCode: normalizedCode,
          originalAmount: subtotal
        })
      });

      const data = await response.json();

      if (data.valid) {
        setAppliedCoupon({ code: normalizedCode, discount: data.discount });
        toast({
          title: "Cupón aplicado",
          description: `Se ha aplicado un descuento de ${data.discount.toFixed(2)}€`,
        });
      } else {
        setCouponError("El código no es válido o está caducado");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      setCouponError("Error al aplicar el cupón. Por favor, inténtalo de nuevo.");
    } finally {
      setIsApplying(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
    toast({
      title: "Cupón eliminado",
      description: "El cupón ha sido eliminado del pedido",
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 h-fit sticky top-24">
      <h2 className="text-2xl font-bold mb-6 text-card-foreground">Tu Pedido</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold text-card-foreground">{product.name}</p>
            <p className="text-sm text-muted-foreground">{product.duration}</p>
          </div>
          <p className="font-semibold text-card-foreground">{product.priceFormatted}</p>
        </div>

        <Separator />

        <div className="flex justify-between text-card-foreground">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)}€</span>
        </div>

        {appliedCoupon && (
          <div className="flex justify-between text-green-600">
            <span>Cupón {appliedCoupon.code}</span>
            <span>-{appliedCoupon.discount.toFixed(2)}€</span>
          </div>
        )}

        <Separator />

        <div className="flex justify-between text-lg font-bold text-card-foreground">
          <span>Total</span>
          <span>{total.toFixed(2)}€</span>
        </div>

        <Card className="p-4 bg-muted/30 border-muted">
          <h3 className="font-semibold mb-3 text-card-foreground">Cupón</h3>
          <div className="space-y-2">
            <Input
              placeholder="Introduce tu código"
              value={couponCode}
              onChange={(e) => {
                setCouponCode(e.target.value.toUpperCase());
                setCouponError("");
              }}
              disabled={!!appliedCoupon || isApplying}
              className="bg-background"
            />
            {couponError && (
              <p className="text-destructive text-sm">{couponError}</p>
            )}
            {!appliedCoupon ? (
              <Button
                onClick={handleApplyCoupon}
                variant="outline"
                className="w-full"
                disabled={isApplying}
              >
                {isApplying ? "Aplicando..." : "Aplicar"}
              </Button>
            ) : (
              <Button
                onClick={handleRemoveCoupon}
                variant="outline"
                className="w-full"
              >
                Quitar cupón
              </Button>
            )}
          </div>
        </Card>

        <div className="text-sm text-muted-foreground space-y-1 pt-4">
          <p>• Solo se puede aplicar un cupón por producto</p>
          <p>• Descuentos disponibles: 50€ o 100€</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
