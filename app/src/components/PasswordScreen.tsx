import { useState } from 'react'
import type { FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PasswordScreenProps {
    onAuthenticated: () => void
}

const CORRECT_PASSWORD_HASH = '8a699dc40c4e2ab671af7cf81a6620b54abdd95737d82f96385c636cb815033e'

async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export default function PasswordScreen({ onAuthenticated }: PasswordScreenProps) {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(false)

        try {
            const hash = await hashPassword(password)

            if (hash === CORRECT_PASSWORD_HASH) {
                sessionStorage.setItem('authenticated', 'true')
                onAuthenticated()
            } else {
                setError(true)
                setPassword('')
            }
        } catch {
            setError(true)
            setPassword('')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-md space-y-8">
                {/* Logo en titel */}
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="/logo.webp"
                        alt="Logo"
                        className="h-20 w-20"
                    />
                    <div className="text-center space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Prompting gids voor advocaten
                        </h1>
                        <p className="text-muted-foreground">
                            Voer het wachtwoord in om toegang te krijgen
                        </p>
                    </div>
                </div>

                {/* Login card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Authenticatie</CardTitle>
                        <CardDescription>
                            Deze gids is alleen toegankelijk met een wachtwoord
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="password"
                                    placeholder="Wachtwoord"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setError(false)
                                    }}
                                    className={error ? 'border-destructive' : ''}
                                    disabled={isLoading}
                                    autoFocus
                                />
                                {error && (
                                    <p className="text-sm text-destructive">
                                        Incorrect wachtwoord. Probeer het opnieuw.
                                    </p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading || !password}
                            >
                                {isLoading ? 'Verifiëren...' : 'Toegang verkrijgen'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

