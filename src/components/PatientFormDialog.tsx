import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, User, CheckCircle, ArrowRight, Clock, RefreshCw } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

interface PatientFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PatientFormDialog = ({ open, onOpenChange }: PatientFormDialogProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });
  
  const [verification, setVerification] = useState({
    phone: {
      isVerified: false,
      isVerifying: false,
      code: "",
      userCode: "",
      timer: 0,
      showResend: false
    },
    email: {
      isVerified: false,
      isVerifying: false,
      code: "",
      userCode: "",
      timer: 0,
      showResend: false
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldsDisabled, setFieldsDisabled] = useState(false);
  const { toast } = useToast();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const startTimer = (type: 'phone' | 'email') => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    setVerification(prev => ({
      ...prev,
      [type]: { ...prev[type], timer: 10 }
    }));

    timerRef.current = setInterval(() => {
      setVerification(prev => {
        const newTimer = prev[type].timer - 1;
        if (newTimer <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          return {
            ...prev,
            [type]: { 
              ...prev[type], 
              timer: 0, 
              showResend: true,
              isVerifying: false 
            }
          };
        }
        return {
          ...prev,
          [type]: { ...prev[type], timer: newTimer }
        };
      });
    }, 1000);
  };

  const handleVerify = async (type: 'phone' | 'email') => {
    const value = formData[type];
    if (!value) {
      toast({
        title: "Error",
        description: `Please enter a ${type} number first.`,
        variant: "destructive"
      });
      return;
    }

    const code = generateVerificationCode();
    setVerification(prev => ({
      ...prev,
      [type]: { 
        ...prev[type], 
        isVerifying: true, 
        code,
        showResend: false 
      }
    }));
    
    setFieldsDisabled(true);
    
    // Simulate sending code
    toast({
      title: "Verification Code Sent",
      description: `6-digit code sent to your ${type}. Code: ${code}`,
    });

    startTimer(type);
  };

  const handleCodeChange = (type: 'phone' | 'email', value: string) => {
    if (value.length <= 6) {
      setVerification(prev => ({
        ...prev,
        [type]: { ...prev[type], userCode: value }
      }));

      // Check if code is correct when 6 digits entered
      if (value.length === 6) {
        if (value === verification[type].code) {
          if (timerRef.current) clearInterval(timerRef.current);
          setVerification(prev => ({
            ...prev,
            [type]: { 
              ...prev[type], 
              isVerified: true, 
              isVerifying: false,
              timer: 0
            }
          }));
          toast({
            title: "Verification Successful",
            description: `${type.charAt(0).toUpperCase() + type.slice(1)} verified successfully!`,
          });
        }
      }
    }
  };

  const handleResendCode = (type: 'phone' | 'email') => {
    setVerification(prev => ({
      ...prev,
      [type]: { 
        ...prev[type], 
        showResend: false, 
        userCode: "",
        timer: 0
      }
    }));
    handleVerify(type);
  };

  const canSubmit = verification.phone.isVerified && verification.email.isVerified;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Patient information submitted successfully!",
      description: "Our AI agent will contact the patient within 24 hours for assessment.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ firstName: "", lastName: "", phone: "", email: "" });
      setVerification({
        phone: { isVerified: false, isVerifying: false, code: "", userCode: "", timer: 0, showResend: false },
        email: { isVerified: false, isVerifying: false, code: "", userCode: "", timer: 0, showResend: false }
      });
      setFieldsDisabled(false);
      onOpenChange(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md shadow-strong">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Patient Screening Form
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter patient details to initiate AI-powered mental health assessment
          </DialogDescription>
        </DialogHeader>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="pl-10"
                    disabled={fieldsDisabled}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="pl-10"
                    disabled={fieldsDisabled}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Phone Number with Verification */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10"
                    disabled={fieldsDisabled}
                    required
                  />
                </div>
                {!verification.phone.isVerified && !verification.phone.isVerifying && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleVerify('phone')}
                    disabled={!formData.phone}
                  >
                    Verify
                  </Button>
                )}
                {verification.phone.isVerified && (
                  <Button type="button" variant="outline" disabled className="text-success">
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Phone Verification Code Input */}
              {verification.phone.isVerifying && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={verification.phone.userCode}
                      onChange={(e) => handleCodeChange('phone', e.target.value.replace(/\D/g, ''))}
                      className="w-40"
                      maxLength={6}
                      disabled={verification.phone.timer === 0}
                    />
                    {verification.phone.timer > 0 && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {verification.phone.timer}s
                      </div>
                    )}
                  </div>
                  {verification.phone.showResend && (
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleResendCode('phone')}
                      >
                        <RefreshCw className="w-4 h-4 mr-1" />
                        Resend Code
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleVerify('phone')}
                      >
                        Verify
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Email Address with Verification */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    disabled={fieldsDisabled}
                    required
                  />
                </div>
                {!verification.email.isVerified && !verification.email.isVerifying && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleVerify('email')}
                    disabled={!formData.email}
                  >
                    Verify
                  </Button>
                )}
                {verification.email.isVerified && (
                  <Button type="button" variant="outline" disabled className="text-success">
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Email Verification Code Input */}
              {verification.email.isVerifying && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={verification.email.userCode}
                      onChange={(e) => handleCodeChange('email', e.target.value.replace(/\D/g, ''))}
                      className="w-40"
                      maxLength={6}
                      disabled={verification.email.timer === 0}
                    />
                    {verification.email.timer > 0 && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {verification.email.timer}s
                      </div>
                    )}
                  </div>
                  {verification.email.showResend && (
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleResendCode('email')}
                      >
                        <RefreshCw className="w-4 h-4 mr-1" />
                        Resend Code
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleVerify('email')}
                      >
                        Verify
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-primary-soft border border-primary/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-primary mb-1">AI Assessment Process</p>
                  <p className="text-primary/80">
                    Our AI agent will call within 24 hours to conduct a comprehensive mental health screening 
                    using evidence-based assessment protocols.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting || !canSubmit}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                  Scheduling Assessment...
                </>
              ) : !canSubmit ? (
                <>
                  Please verify phone and email first
                </>
              ) : (
                <>
                  Submit for AI Assessment
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success-soft rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Assessment Scheduled Successfully!
            </h3>
            <p className="text-muted-foreground mb-4">
              {formData.firstName} will receive an AI-powered assessment call within 24 hours.
            </p>
            <div className="bg-success-soft border border-success/20 rounded-lg p-3">
              <p className="text-sm text-success">
                📞 Call scheduled • 📊 Dashboard updated • 📈 Analytics ready
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PatientFormDialog;